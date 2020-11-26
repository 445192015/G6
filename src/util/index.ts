import * as MathUtil from './math';
import * as GraphicUtil from './graphic';
import * as PathUtil from './path';
import * as BaseUtil from './base';
import * as ColorUtil from './color';
import { mat3, transform } from '@antv/matrix-util';
import { mix, isNumber, deepMix, isArray, uniqueId } from '@antv/util';

const Base = {
  mat3,
  mix,
  deepMix,
  transform,
  isArray,
  isNumber,
  uniqueId
};

const Util = { ...Base, ...BaseUtil, ...GraphicUtil, ...PathUtil, ...MathUtil, ...ColorUtil };
export default Util;
