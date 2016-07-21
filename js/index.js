function autotab(obj1,obj2){
	var aUl=obj1.getElementsByTagName('ul');
	var aLi=obj2.getElementsByTagName('li');
	var iNow=0;
	var timer=null;
	function tab(){
		for(var i=0;i<aLi.length-1;i++){
			aLi[i].className='';
			aUl[i+1].style.display='none';
		}
		aLi[iNow].className='active';
		aUl[iNow+1].style.display='block';
	}
	for(var i=0;i<aLi.length-1;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			iNow=this.index;
			tab();
		};
	}
	clearInterval(timer);
	timer=setInterval(function(){
		iNow++;
		if(iNow==aLi.length-1){
			iNow=0;
		}
		tab();
	},1000);
	obj1.onmouseover=function(){
		clearInterval(timer);
	};
	obj1.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			iNow++;
			if(iNow==aLi.length-1){
				iNow=0;
			}
			tab();
		},1000);
	};
}
function autotab2(obj1,obj2){
	var aUl=obj1.getElementsByTagName('ul');
	var aLi=obj2.getElementsByTagName('li');
	var iNow=1;
	var timer=null;
	function tab(){
		for(var i=1;i<aLi.length-1;i++){
			aLi[i].className='';
			aUl[i].style.display='none';
		}
		aLi[iNow].className='active';
		aUl[iNow].style.display='block';
	}
	for(var i=1;i<aLi.length-1;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			iNow=this.index;
			tab();
		};
	}
	clearInterval(timer);
	timer=setInterval(function(){
		iNow++;
		//alert(iNow);
		if(iNow==aLi.length-1){
			iNow=1;
		}
		tab();
	},1000);
	obj1.onmouseover=function(){
		clearInterval(timer);
	};
	obj1.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			iNow++;
			if(iNow==aLi.length-1){
				iNow=1;
			}
			tab();
		},1000);
	};
}

function video(obj){
	var aLi1=obj.getElementsByTagName('li');
	for(var i=0;i<aLi1.length;i++){
		aLi1[i].index=i;
		aLi1[i].onmouseover=function(){
			for(var j=0;j<aLi1.length;j++){
				if(j%2==0){
					aLi1[j].style.display='block';
					aLi1[j+1].style.display='none';
				}
			}
			if(this.index%2==0){
				this.style.display='none';
				aLi1[this.index+1].style.display='block';
			}else{
				this.style.display='block';
				aLi1[this.index-1].style.display='none';
			}
		};
	}
}
