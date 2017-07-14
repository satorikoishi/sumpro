/**
 * saveQuestionnaire

 * 1.和后端交互的变量名应保持一致，data和options，questions列表结构保持一致；
 * 2.不需要指定questionnaire的id,one_question的id和q_id,以及q_options的q_id；
 * 3.需要用JSON.Stringify()将js列表转化为JSON字符串，但只用一次；
 * */


var i=3,arr=new Array('F9F9F9','F0F0F0');
var questionli=[2,2];

function a(id){

	questionli[id]++;
	var k=document.createElement('span');
	var j=document.createElement('span');

	k.innerHTML=+questionli[id]+"&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp";
	
	 var input1 = document.createElement('input');
	    input1.setAttribute('type', 'text');
	    input1.setAttribute('name', 'organizers[]');
	    input1.setAttribute('class', 'git');
	    input1.setAttribute('value', '编辑问题');
	    input1.setAttribute('style','width:800px;');
	    input1.setAttribute('style','margin:5px');
	   
	    var btn1 = document.getElementById(id);
	    btn1.appendChild(k);
	    btn1.appendChild(input1)
	    
	    j.innerHTML="<br>"
        btn1.appendChild(j)
   }

function c(){
var arr = document.getElementsByTagName("div");

for(var i=0;i<num;i++)    
 {  
    ha.removeChild(arr[1]); 
 }
}
//单选题的添加
function addNew1(){
	questionli.push(2);
tr=document.all.t136.insertRow();
tr.style.backgroundColor=arr[i%2];
tr.insertCell().innerHTML= '<td class="item6" ><br><div class="que" align="left"heigh="8"><font size="4" >&nbsp&nbsp('+i+') &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp <input id="'+(i*10)+'" value="编辑题目" class="input-text"  type="text" colour="white" size="50"/></font> </div><br /><br /><div align="left"><font size="4" >&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp 1&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp  <input id="'+(i*10+1)+'" value="编辑选项" class="input-text"  type="text" colour="white" size="44"/></font> </div><br /><br /><div align="left"><font size="4" >&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp 2&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp  <input  id="'+(i*10+2)+'"  value="编辑选项" class="input-text"  type="text" colour="white" size="44"/></font> </div><br><div class="options"  style="margin-left:65px;"><div id="0" ></div><i class="fa fa-plus-circle" aria-hidden="true"><button id="0" onclick="a(this.id)">新增选项</button></i></div><br /><label><input name="Fruit" type="checkbox" value="" /> &nbsp&nbsp &nbsp&nbsp必答 &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp</label><br></td>';
i++;
}
//多选题的添加
function addNew2(){
	questionli.push(2);
	tr=document.all.t136.insertRow();
	tr.style.backgroundColor=arr[i%2];
tr.insertCell().innerHTML= '<td class="item6" ><br><div class="que" align="left"heigh="8"><font size="4" >&nbsp&nbsp('+i+') &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp <input id="'+(i*10)+'" value="编辑题目" class="input-text"  type="text" colour="white" size="50"/></font> </div><br /><br /><div align="left"><font size="4" >&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp 1&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp  <input id="'+(i*10+1)+'" value="编辑选项" class="input-text"  type="text" colour="white" size="44"/></font> </div><br /><br /><div align="left"><font size="4" >&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp 2&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp  <input  id="'+(i*10+2)+'"  value="编辑选项" class="input-text"  type="text" colour="white" size="44"/></font> </div><br><div class="options"  style="margin-left:65px;"><div id="0" ></div><i class="fa fa-plus-circle" aria-hidden="true"><button id="0" onclick="a(this.id)">新增选项</button></i></div><br /><label><input name="Fruit" type="checkbox" value="" /> &nbsp&nbsp &nbsp&nbsp必答 &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp</label><br></td>';

	i++;

}
function addNew3(){
	tr=document.all.t136.insertRow();
	tr.style.backgroundColor=arr[i%2];

	}
function del(){
	question.remove(window.event.srcElement.parentElement.parentElement.rowIndex);
document.all.t136.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);
for(i=0;i<document.all.t136.rows.length-5;i++){
document.all.t136.rows[i+5].cells[0].innerText="问题"+(i+1);

document.all.t136.rows[i+5].style.backgroundColor=arr[i%2];
}
}


function submit(){
	var len=questionli.length+1;
	var array_questions = [];
	for(var j = 1; j<len;j++){
		var array_options = [];
		for(var i = 1; i <questionli[j-1];i++){
			var id=j*10+i;
			var option = {
				title : i, //变量名一致
				property : document.getElementById(id).value//变量名一致
			};
			array_options.push(option);
		}
		
		var question = {
			title_num : j, //变量名一致（题号）
			stem :  document.getElementById(10*j).value, //变量名一致
			type : "0", //变量名一致
			nessecity : "1", //变量名一致
			options : array_options //变量名一致
		};
		array_questions.push(question);
	}
	jQuery.ajax({
		url : 'saveQuestionnaire',
		type : 'POST', //post
		dataType : "json", //需要指定为json
		data: {
			u_id :document.getElementById("u_id").innerHTML,
			title : document.getElementById("tit").value, //变量名一致
			instruction : document.getElementById("wel").value, //变量名一致
			set_date : "2017-7-1", //变量名一致，datetime格式："yyyy-mm-dd hh:mm:ss"
			end_date : "2017-7-22", //变量名一致，datetime格式："yyyy-mm-dd hh:mm:ss"
			questions : JSON.stringify(array_questions) //变量名一致，用JSON.Stringify()封装且只封装一次
		},
		success : function(data){
			alert("success");
		}
	});
}

