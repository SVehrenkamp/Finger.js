//Finger.js
var Finger = function(el){
	//Public instances
	this.el = el;

	//Private instances
	
	/**
	 * swipe right, left, up and down swipe gestures
	 * @return {method} broadcastEvent(eventDescription)
	 */
	var swipe = function(){
		var start,
			end,
			diff;

		this.el.on('touchstart mousedown', function(e){
			if (e.originalEvent.changedTouches) {
				var touchX = e.originalEvent.changedTouches[0].pageX;
			}
			start = touchX ? touchX : e.pageX;
		});

		this.el.on('touchend mouseup', function(e){
			if (e.originalEvent.changedTouches) {
				var touchX = e.originalEvent.changedTouches[0].pageX;
			}

			end = touchX ? touchX : e.pageX;

			diff = (end-start);

			if (diff > 20) {
				broadcastEvent('swiperight', start, end, diff);
			} else if (diff < -20) {
				broadcastEvent('swipeleft', start, end, diff);
			} else {
				return;
			}
		});
	};

	/**
	 * Longpress event fires after 1.5s
	 * @return {method} broadcastEvent(eventDescription)
	 */
	var longpress = function(){
		var press = {},
			diff = {},
			duration,
			timer;

		this.el.on('touchstart mousedown', function(e){
			if (e.originalEvent.changedTouches) {
				var touchX = e.originalEvent.changedTouches[0].pageX;
				var touchY = e.originalEvent.changedTouches[0].pageY;
			}

			press.x = touchX ? touchX : e.pageX;
			press.y = touchY ? touchY : e.pageY;
			press.time = e.timeStamp;

			timer = setInterval(function(){
				var time = new Date();
				time = time.getTime();
				if ((time - press.time) < 1000) {
					return;
				} else {
					broadcastEvent('longpress');
					clearInterval(timer);
					return;
				}
			}, 10);

		});
		this.el.on('touchend mouseup', function(e){
			clearInterval(timer);
		});
	}

	var broadcastEvent = function(eventName, start, end, diff){
		var e = $.Event(eventName);
		this.el.trigger(e);

	};
	var attachEvents = function(){
		swipe();
		longpress();
	}
	
	var init = function(){
		attachEvents();
	}

	return init();
}

//Public API
Finger.prototype.on = function(evt, callback){
	this.el.on(evt, callback);
}
