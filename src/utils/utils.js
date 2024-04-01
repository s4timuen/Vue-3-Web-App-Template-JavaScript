function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function escapeRegExUrls(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

export { getRandomNumber, escapeRegExUrls }
