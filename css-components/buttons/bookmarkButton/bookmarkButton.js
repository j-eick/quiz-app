export default function BookmarkButton() {
  const bookmarkBtn = document.querySelector('[data-js="bookmarkButton"]');
  const bookmark_show = document.querySelector('[data-js="bookmark--active"]');
  bookmarkBtn.addEventListener("click", () => {
    console.log("bla");
    bookmark_show.classList.toggle("button__bookmark--show");
  });
}
