"use strict";
console.log(`\n\n\n
\x1b[31m██████╗░██╗███╗░░██╗████████╗███████╗░██████╗░███████╗\x1b[0m
\x1b[31m██╔══██╗██║████╗░██║╚══██╔══╝╚════██║██╔════╝░██╔════╝\x1b[0m
\x1b[31m██████╦╝██║██╔██╗██║░░░██║░░░░░███╔═╝██║░░██╗░█████╗░░\x1b[0m
\x1b[37m██╔══██╗██║██║╚████║░░░██║░░░██╔══╝░░██║░░╚██╗██╔══╝░░\x1b[0m
\x1b[37m██████╦╝██║██║░╚███║░░░██║░░░███████╗╚██████╔╝███████╗\x1b[0m
\x1b[37m╚═════╝░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝░╚═════╝░╚══════╝\x1b[0m


\x1b[37mThanks for using this baileys.\x1b[0m
\x1b[36mCopyright © 2023 - 2025 BintzGE\x1b[0m
\x1b[34mYouTube: Bintang Ghali Elhaq\x1b[0m
\x1b[35mTikTok: @bintangghalielhaqyt\x1b[0m
\x1b[36mInstagram: @bintz.ig\x1b[0m

\x1b[33mWebsite: https://website-bintzge.myvnc.com\x1b[0m
`);
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
exports.default = Socket_1.default;
