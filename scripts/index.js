'use strict';
document.addEventListener('DOMContentLoaded', () => {
	updateMessagesCount();
	document.addEventListener('click', spollerToggler);
});

function spollerToggler(event) {
	const target = event.target;
	if (target.classList.contains('blog__messages-count') || target.classList.contains('spoller-toggler')) {
		const blogItem = event.target.closest('.blog__item');

		if (blogItem) {
			blogItem.classList.toggle('spoller-active');
		}
	}
}
function updateMessagesCount() {
	const blogItems = document.querySelectorAll('.blog__item');

	blogItems.forEach((blogItem) => {
		const spollerItemsCount = blogItem.querySelectorAll('.blog__spoller-item').length;
		const messagesCountElement = blogItem.querySelector('.blog__messages-count');
		if (messagesCountElement) {
			messagesCountElement.textContent = spollerItemsCount;
		}
	});
}
