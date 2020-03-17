var postcss = require("postcss")

module.exports = postcss.plugin(
  "repeated-decl",
  (options = { threshold: { utils: 5, variables: 2 }, ignore: [] }) => {
    // Work with options here
    return (root, result) => {
      // create empty array to place all property/value pairs into
      let allPropValPairs = new Array()
      root.walkDecls(decl => {
        // check if the properies should be ignored
        if (
          !options.ignore.includes(decl.prop) &&
          !decl.value.includes("var") &&
          !decl.value.includes("$")
        ) {
          // construct prop/val pairs in readable format
          const propValPair = `${decl.prop}: ${decl.value}`

          // push prop/val pairs to array of all pairs
          allPropValPairs.push(propValPair)
        } else {
          return null
        }
      })
      // count number of times each prop/val pair is found
      // return a list of all pairs, with their # of occurences
      let countedPairs = allPropValPairs.reduce((allPairs, pair) => {
        pair in allPairs ? allPairs[pair]++ : (allPairs[pair] = 1)
        return allPairs
      }, {})

      // map over entries of all repeated pairs
      // log suggestions to console based on number of occurences
      Object.entries(countedPairs).map(entry => {
        if (entry[1] > options.threshold.utils) {
          result.warn(
            `You've used "${entry[0]}" a total of ${entry[1]} times. Try a utility here.`,
            { plugin: "postcss-repeated-decl" }
          )
        } else if (entry[1] > options.threshold.variables) {
          result.warn(
            `You've used "${entry[0]}" a total of ${entry[1]} times. Try a variable.`,
            { plugin: "postcss-repeated-decl" }
          )
        } else {
          return null
        }
      })

      result.warnings().forEach(warn => {
        console.warn(warn.toString())
      })
    }
  }
)
