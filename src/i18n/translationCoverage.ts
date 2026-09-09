import { atlasArchosaurDeepeningZhKeys } from './atlasArchosaurDeepeningZhKeys'
import { hasCrustaceansInsectsTranslation } from './crustaceansInsectsZhKeys'
import { cetartiodactylaZhKeys } from './cetartiodactylaZhKeys'
import { carnivoraZhKeys } from './carnivoraZhKeys'
import { crocBirdZhKeys } from './crocBirdZhKeys'
import { dinosaurZhKeys } from './dinosaurZhKeys'
import { marineZhKeys } from './marineZhKeys'
import { mammalProfilesZhKeys } from './mammalProfilesZhKeys'
import { molluscsBrachiopodsZhKeys } from './molluscsBrachiopodsZhKeys'
import { otherMammalsZhKeys } from './otherMammalsZhKeys'
import { hasPlantInvertebrateProfileTranslation } from './plantInvertebrateProfilesZhKeys'
import { primatesZhKeys } from './primatesZhKeys'
import { rc77EchinodermsZhKeys } from './rc77EchinodermsZhKeys'
import { rc77PlantsZhKeys } from './rc77PlantsZhKeys'
import { rc77TetrapodProfilesZhKeys } from './rc77TetrapodProfilesZhKeys'
import { spongesCnidariansZhKeys } from './spongesCnidariansZhKeys'
import { trilobitesCheliceratesZhKeys } from './trilobitesCheliceratesZhKeys'
import { hasTurtleLepidosaurTranslation } from './turtleLepidosaurZhKeys'
import { issue84Rc45ZhKeys } from './issue84Rc45ZhKeys'
import { hasVertebrateDeepeningTranslation } from './vertebrateDeepeningZhKeys'

import { zh, compactAmphibianTranslation } from './baseChinese'

export function hasChineseTranslation(english: string): boolean {
  return Object.hasOwn(zh, english)
    || atlasArchosaurDeepeningZhKeys.has(english)
    || marineZhKeys.has(english)
    || mammalProfilesZhKeys.has(english)
    || cetartiodactylaZhKeys.has(english)
    || carnivoraZhKeys.has(english)
    || hasTurtleLepidosaurTranslation(english)
    || crocBirdZhKeys.has(english)
    || primatesZhKeys.has(english)
    || otherMammalsZhKeys.has(english)
    || dinosaurZhKeys.has(english)
    || spongesCnidariansZhKeys.has(english)
    || molluscsBrachiopodsZhKeys.has(english)
    || trilobitesCheliceratesZhKeys.has(english)
    || hasCrustaceansInsectsTranslation(english)
    || hasVertebrateDeepeningTranslation(english)
    || hasPlantInvertebrateProfileTranslation(english)
    || issue84Rc45ZhKeys.has(english)
    || rc77PlantsZhKeys.has(english)
    || rc77EchinodermsZhKeys.has(english)
    || rc77TetrapodProfilesZhKeys.has(english)
    || compactAmphibianTranslation(english) !== undefined
}
