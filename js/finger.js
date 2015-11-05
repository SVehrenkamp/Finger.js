//Finger.js
var Finger = function(el){
	//Public instances
	this.el = el;

	//Private instances
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

	var broadcastEvent = function(eventName, start, end, diff){
		var e = $.Event(eventName);
		this.el.trigger(e);

	};
	var attachEvents = function(){
		swipe();
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
