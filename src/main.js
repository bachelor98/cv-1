let html=document.querySelector("#demo");
let style=document.querySelector('#style');
let string=`/*你好，我是前端新人!
接下来我要准备个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来做个八卦图
首先把div变成一个圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成一黑一白*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%
, rgba(255,255,255,1) 50%
, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*这里是伪元素做的球,就是用css更改div1的第一个和最后一个子元素*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%,
     rgba(255,255,255,1) 25%,
      rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content:'';
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%,
     rgba(0,0,0,1) 25%,
     rgba(255,255,255,1) 25%,
      rgba(255,255,255,1) 100%);
    border-radius:50%;
}
`;
let string2=''  //用于缓存string的结果
let n=0;
let step=()=>{
    setTimeout(() => {
        //string2+=(string[n]==='\n'?"<br>":string[n])
        //不考虑缩进下面的句子可以简化为上面
         if(string[n]==="\n"){   //判断是不是回车
             string2+="<br>" ; //是回车就不照搬
         }else if(string[n]===" "){
            string2+='&nbsp';  //空格保留
         }
         else{
             string2+=string[n]}    //不是回车就照搬
        html.innerHTML=string2;
        style.innerHTML=string.substring(0,n);
        if(n+1<string.length)
        {
            n+=1;step();
            window.scrollTo(0,99999);
            html.scrollTo(0,99999)
        }
},10);
};
step();
