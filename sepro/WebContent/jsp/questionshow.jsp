<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
/*show model*/
<html>
  <head>

 <style>
nec{color:red}
.box1 {width:70%; float:left; display:inline;}
.box2 {width:30%; float:left; display:inline;}

.leader{ 
	font-family:"斜体"; 
	font-size:18px;
	color=#000000;
	}//标题所用css
div{
display:inline
}
.logo_img{
position:absolute;
top:50px
}

.form-search {
align="right";
font-size:13px;
}



</style>
<title>问卷网</title>
<link href="../css/bootstrap.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
  </head>
  
  <body>
   <!-- 头部开始-->
	<div class="leader" align="center">
	<img src="../picture/logo.png" width="120px" height="45px" /></a>&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp 
         	 <a href = "#"><font  >发布问卷</font></a> &nbsp 
     	 	 <a href = "#"><font  >问卷模板</font></a> &nbsp 
     		 <a href = "#"><font  >问卷广场</font></a> &nbsp 
    	     <a href = "#"><font  >个人中心 </font></a> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
             <font size="3"  ><i class="fa fa-user fa-lg">username</font></i> 
   </div>   
 <!-- 头部结束 -->
 
 
 
<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="100%" color=#987cb9 SIZE=1>   <!-- 分割线 -->
							
   
         <div class="nav">
            <ul>
                <div class="box1"><font size="4" color="DarkOrchid">已发布问卷</font> </div>
               <div class="box2" font-size:15px float:right>
                            <input  value="请输入问卷名称" class="input-text"  type="text" colour="white"/>
                            <button type="button" title="Search">创建</button>
                        </div>
                  
            
            </ul>
        </div>

	   <div class="products_list products_slider clear">

	                <ul id="first-carousel" class="first-and-second-carousel jcarousel-skin-tango">
		                    <li> <div>
		                    	<!--  图片部分 <a href="${shop}/product_get.action?id=${product.id}" class="product_image"><img src="${shop}/files/${product.pic}" /></a>  -->
		                    	  <img src="../picture/questionnaire.png" width="100px" height="140px" />
		        
		                        <div class="product_info">
		                            <small>问卷简介</small> </div>
		                            
		                            
		                       </div>
		                    </li>
	                
	                </ul>
	     </div>
         
     

<HR style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="100%" color=#987cb9 SIZE=1> <!-- 分割线 -->

	      
	              <ul class="primary_nav">
                <li class="active highlight"><a href="#"><font size="4" color="DarkOrchid">已发布内容</font></a>
          </ul>
	      
	            	
	                 	  <ul id="first-carousel" class="first-and-second-carousel jcarousel-skin-tango">
	              
		                    <li> 
		                    	<!--  图片部分 <a href="${shop}/product_get.action?id=${product.id}" class="product_image"><img src="${shop}/files/${product.pic}" /></a>  -->
		                    	  <img src="../picture/questionnaire.png" width="100px" height="140px" />
		        
		                        <div class="product_info">
		                            <small>&nbsp&nbsp&nbsp问卷简介</small> </div>
		                       
		                    </li>

	                </ul>

  </body>
</html>
