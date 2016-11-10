/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule StyleSheetTypes
 * @flow
 */

type Atom = number | bool | Object | Array<?Atom>;
export type StyleObj = Atom;

export type Styles = { [key: string]: Object };
export type StyleSheet<S: Styles> = { [key: $Keys<S>]: number };

export type StyleSheetFunctions = {
  create: <S: Styles>(obj: S) => StyleSheet<S>,
  flatten: (style: ?StyleObj) => ?Object,
  resolve: (props: Object) => ?Object,
};
