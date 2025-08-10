# Angular Setup

### Project Structure

1. Implemented feature based model structure where the src/app/* has multiple folders to allow modularity.
   This would make it easy to segregate components that need to be shared across the app or have
   have individual responsibilities. The features folder would reflect the components that would match
   the routing and the components under the shared folder would allow re-use
2. The shared components folder has an index.ts file that would allow barrel imports. As and when the
   application grows we will end up exporting the components using the barrel exports
3. The path mapping was updated in tsconfig.json and it's simpler now. This project will not use relative
   paths.
4. For the Shared module structure we do not have any components at the moment. When we start building
   our application we will add the shared module feature


### Development Environment

1. I used Claude.AI to help me with the majority of this and we set up
   - ESLint
   - Prettier
   - Husky
   - Strict Typescript compilation

### SCSS Architecture

1. I learned about the 7-1SCSS Architecture and created the required folders



### Confusion and Unknowns

A lot of the setup was new to me and I had to search for the majority of it. There are some questions
and concerns

1. How does circular dependencies come into picture?
2. Differences between shared, core and feature modules?
3. I am not sure where to start with the CSS custom properties for theming, neither am I sure about the
   responsive breakpoint mixins, the Utility class system and the component-scoped styling strategy.
4. I Need to look into the bonus points later
   - Set up bundle analyzer to monitor build size 
   - Configure source maps for better debugging 
   - Add environment-specific configurations 
   - Set up Angular DevTools optimization

