function getCurrentPositionAsync() {
  return {
    coords: {
      latitude: '50.987578',
      longitude: '-119.725971',
    },
  }
}

function getPermissionsAsync() {
  return {
    status: 'granted',
  }
}

export { getCurrentPositionAsync, getPermissionsAsync }
