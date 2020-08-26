export let a = 10;
export class App {

}

class Angular {
    name = Angular;
}
export default Angular; //파일 중 하나만 export

//common js
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.App = exports.a = void 0;
// exports.a = 10;
// var App = /** @class */ (function () {
//     function App() {
//     }
//     return App;
// }());
// exports.App = App;