export const checkImage = (img) => {
	if (img) {
		return `https://image.tmdb.org/t/p/w500${img}`
	}
	if (!img) {
		return "https://scalar.usc.edu/works/guide/media/gradient.jpg"
	}
}
