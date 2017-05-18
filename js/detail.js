/**
 * Created by shaojunyan on 2017-5-17.
 */
/**
 * Created by shaojunyan on 2017-5-16.
 */
(function () {
    function showAskDialog() {
        document.getElementById('addQuesModal').style.display = "block";
    }
    function closeAskDialog() {
        document.getElementById('addQuesModal').style.display = "none";
    }
    function showAnsDialog() {
        document.getElementById('ansQuesModal').style.display = "block";
    }
    function closeAnsDialog() {
        document.getElementById('ansQuesModal').style.display = "none";
    }
    function showAsk(){
        document.getElementById('showAskDialog').onclick=function() {
            showAskDialog();
        }

    }
    function closeAsk(){
        document.getElementById('closeAskDialog').addEventListener("click",function (e) {
            closeAskDialog();
        })
        document.getElementById('closeAskDialog2').addEventListener("click",function (e) {
            closeAskDialog();
        })
    }
    function showAns(){
        document.getElementById('showAnsDialog').onclick=function() {
            showAnsDialog();
        }

    }
    function closeAns(){
        document.getElementById('closeAnsDialog').addEventListener("click",function (e) {
            closeAnsDialog();
        })
        document.getElementById('closeAnsDialog2').addEventListener("click",function (e) {
            closeAnsDialog();
        })
    }
    function Star(id) {
        this.id = "#"+id;
        this.starNum = 0;
        var indexList = [];
        //构造函数
        function init(id){
            starContainer = document.querySelector(id)
            var htmlStr = "<li class='star_unselect'>&#xe623;</li>"+
            "<li class='star_unselect'>&#xe623;</li>"+
            "<li class='star_unselect'>&#xe623;</li>"+
            "<li class='star_unselect'>&#xe623;</li>"+
            "<li class='star_unselect'>&#xe623;</li>"
            starContainer.innerHTML = htmlStr
            starList = starContainer.getElementsByTagName('li');
            for(var i=0;i<starList.length;i++){
                starList[i].index ={"no":i,"selected":false};
            }
            indexList = starList
            // setStarNum( this.starNum)
            for(var i=0;i<starList.length;i++){
                starList[i].addEventListener("click",function (e) {
                    for(var j=0;j<=this.index.no;j++){
                        starList[j].className = "star_select";
                        starList[j].index.selected=true;
                    }
                    for(var j=this.index.no+1;j<5;j++){
                        starList[j].className = "star_unselect";
                        starList[j].index.selected=false;
                    }
                    indexList = starList

                })
                starList[i].addEventListener("mouseover",function (e) {
                    for(var j=0;j<=this.index.no;j++){
                        starList[j].className = "star_select";
                    }
                    for(var j=this.index.no+1;j<5;j++){
                        starList[j].className = "star_unselect";
                    }
                })
                starList[i].addEventListener("mouseout",function (e) {
                    for(var j=0;j<=4;j++){
                        if(indexList[j].index.selected==true){
                            starList[j].className = "star_select";
                        }else{
                            starList[j].className = "star_unselect";
                        }
                    }

                })
            }
        }
        init(this.id)
        //获取星星数
        // 私有函数
        function getStarNum(){
            for(var i=0;i<indexList.length;i++){
                if(indexList[i].index.selected ==false)
                    return i;
            }
            return 5
        }
        //设置星星数
        this.setStarNum = function(starNum) {
            this.starNum = starNum
            if(starNum&&starNum<=5){
                for(var i=0;i<=starNum-1;i++){
                    indexList[i].className = "star_select"
                    indexList[i].index.selected =true;
                }
                for(var i=starNum;i<=4;i++){
                    indexList[i].className = "star_unselect"
                    indexList[i].index.selected =false;
                }
            }
        }
        //获取星星数
        this.getStarNum = function(){
            for(var i=0;i<indexList.length;i++){
                if(indexList[i].index.selected ==false)
                    return i;
            }
            return 5
        }
        //绑定点击事件
        this.bindClickEvent = function(ev){
            for(var i=0;i<indexList.length;i++){
                indexList[i].addEventListener('click',ev);
            }
        }
    }

    showAsk();
    closeAsk();
    showAns();
    closeAns();
    var star1 = new Star("star_select2")
    star1.setStarNum(5)
    // console.log(star1.getStarNum())
    star1.bindClickEvent(function(){
        console.log(star1.getStarNum());
    })
})()