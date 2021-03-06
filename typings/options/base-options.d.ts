import { FontOptions } from "./font-options";
import { ShadowOptions } from "./shadow-options";
import Pos from "../types/position";
export interface BaseOptions {
    pos?: Pos | ((sec: number) => Pos);
    alpha?: number | ((sec: number) => number);
    font?: FontOptions;
    shadow?: ShadowOptions;
}
//# sourceMappingURL=base-options.d.ts.map