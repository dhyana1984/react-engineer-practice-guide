// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/yxiong/Repository/react-engineer-practice-guide/ch5 snow-mall/my-app/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}