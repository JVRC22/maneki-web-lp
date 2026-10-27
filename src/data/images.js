// Helper to safely import images with fallback
// CRA's require() will throw at build time if the file doesn't exist,
// so we use a try/catch wrapper.

function tryRequire(path) {
  try {
    return require(`../assets/images/${path}`);
  } catch (e) {
    return null;
  }
}

export const images = {
  sakuraCourtyard: tryRequire('sakura-courtyard.png'),
  floorplan: tryRequire('floorplan.png'),
  teaRoom: tryRequire('tea-room.png'),
  coffeeBar: tryRequire('coffee-bar.png'),
  cafeInterior: tryRequire('cafe-interior.png'),
  logo: tryRequire('logo.png'),
  logoMain: tryRequire('logo-main.png'),
};
