// JavaScript Document
function Drag(id) {
	var _this=this;
	this.oDiv = document.getElementById(id),
	//鼠标和div的距离
	this.disX=0,
	this.disY=0

	this.oDiv.onmousedown = function(ev){
		_this.fnDown(ev);
	}
}

	
Drag.prototype.fnDown = function (ev){
	var oEvent = ev||event;
	var _this = this;
		
	this.disX=oEvent.clientX-this.oDiv.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv.offsetTop;

	document.onmousemove = function(ev){
		_this.fnMove(ev);
	};
	document.onmouseup = function(){
		_this.fnUp();		
	};
};

//鼠标按下之后才会触发mousemove
//在div上加事件鼠标移动快的时候失效，可以再document上加事件
Drag.prototype.fnMove = function(ev) {
	var oEvent = ev||event;
			
	this.oDiv.style.left=oEvent.clientX-this.disX+'px';
	this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};

//鼠标抬起停止拖拽
Drag.prototype.fnUp = function() {
	document.onmousemove=null;
	document.onmouseup=null;
};
	