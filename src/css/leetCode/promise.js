/*
 * @Author       : Fangyiming
 * @Description  :
 * @Date         : 2021-05-06 14:13:05
 */
const PENDING = "pending";

class _Promise {
  static all(promises) {
    if (!promises || typeof promises[Symbol.iterator] !== "function") {
      throw TypeError("sss");
    }
    let index = 0;
    const res = [];
    return new _Promise((resolve, reject) => {
      const n = promises.length;
      if (!n) return [];
      else {
        function processPromise(value, i) {
          res[i] = value;
          if(++index === n) resolve(res)
        }
        for(let i = 0; i< n; i++){
            _Promise.resolve(promises[i]).then(value => {
                processPromise(value, i)
            }, reason => reject(reason))
        }
      }
    });
  }
  static race(promises){
      // 判断promises 是否存在
      return new _Promise((resolve, reject) => {
          for(const promise of promises){
              _Promise.resolve(promise).then(res => {
                  value => resolve(value)
              }, reason => reason)
          }
      })
  }
}
