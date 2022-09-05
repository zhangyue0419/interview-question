module.exports = {
  install: function (less, pluginManager, functions) {
    functions.add('vw', function (param) {
      if (param.value) {
        return Number(param.value) + 'px'
      } else {
        return Number(eval(`${param.operands[0].value}${param.op}${param.operands[1].value}`)) * 8 + 'px'
      }
    }
    );
    functions.add('vh', function (param) {
      if (param.value) {
        return Number(param.value) + 'px'
      } else {
        return Number(eval(`${param.operands[0].value}${param.op}${param.operands[1].value}`)) * 8 + 'px'
      }
    }
    )
  }
}