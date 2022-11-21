/*
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-11-17 01:24:39
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-11-17 01:24:49
 * @FilePath: /fairview park cms/Users/david/Desktop/fairviewpark_v3/fairviewPark_v3/build/build.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.log('build > 文件开始执行！')
const fs = require('fs')
const path = require('path')

function getRootPath(...dir) {
  return path.resolve(process.cwd(), ...dir)
}
const runBuild = async () => {
  try {
    const OUTPUT_DIR = 'dist'
    const VERSION = 'version.json'
    const versionJson = {
      version: 'V_' + Math.floor(Math.random() * 10000) + Date.now()
    }
    fs.writeFileSync(getRootPath(`${OUTPUT_DIR}/${VERSION}`), JSON.stringify(versionJson))
    console.log(`version file is build successfully!`)
  } catch (error) {
    console.error('version build error:\n' + error)
    process.exit(1)
  }
}
runBuild()
console.log('build > 文件执行结束！')