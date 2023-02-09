// @ts-nocheck
import React from 'react';
import {
  ApplyPluginsType,
  dynamic,
} from '/Users/buquan/Desktop/githubs/ifss/node_modules/.pnpm/@umijs+runtime@3.5.36_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [
        dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */ '../dumi/layout') }),
      ],
      component: ((props) =>
        dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(
              /* webpackChunkName: 'dumi_demos' */ '/Users/buquan/Desktop/githubs/ifss/node_modules/.pnpm/@umijs+preset-dumi@1.1.50_2kna6ed4yswa4523syliufmf6i/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs'
            );
            const { default: Previewer } = await import(
              /* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js'
            );
            const { usePrefersColor, context } = await import(
              /* webpackChunkName: 'dumi_demos' */ 'dumi/theme'
            );

            return (props) => {
              const { demos } = React.useContext(context);
              const [renderArgs, setRenderArgs] = React.useState([]);

              // update render args when props changed
              React.useLayoutEffect(() => {
                setRenderArgs(getDemoRenderArgs(props, demos));
              }, [
                props.match.params.uuid,
                props.location.query.wrapper,
                props.location.query.capture,
              ]);

              // for listen prefers-color-schema media change in demo single route
              usePrefersColor();

              switch (renderArgs.length) {
                case 1:
                  // render demo directly
                  return renderArgs[0];

                case 2:
                  // render demo with previewer
                  return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

                default:
                  return `Demo ${props.match.params.uuid} not found :(`;
              }
            };
          },
          loading: () => null,
        }))(),
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */ '../dumi/layout') }),
        dynamic({
          loader: () =>
            import(
              /* webpackChunkName: 'wrappers' */ '/Users/buquan/Desktop/githubs/ifss/node_modules/.pnpm/dumi-theme-default@1.1.24_unpqg3w4nhouqwcgrxw7nqv424/node_modules/dumi-theme-default/es/layout.js'
            ),
        }),
      ],
      routes: [
        {
          path: '/',
          component: dynamic({
            loader: () =>
              import(
                /* webpackChunkName: 'README.md' */ '/Users/buquan/Desktop/githubs/ifss/packages/ui/README.md'
              ),
          }),
          exact: true,
          meta: {
            locale: 'en-US',
            order: null,
            filePath: 'README.md',
            updatedTime: 1675822121000,
            slugs: [
              {
                depth: 2,
                value: 'ui',
                heading: 'ui',
              },
            ],
            title: 'ui',
          },
          title: 'ui',
        },
      ],
      title: '前端组件开发。',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
