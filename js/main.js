$(function(){
    $("i").click(function(){
        // 선택한 칸의 기물
        var unit = $(this).attr("class");
        unit = unit.split("-");
        unit = unit[unit.length-1];
        console.log(unit);


        // 선택한 칸의 플레이어 이름
        var player = $(this).closest("span");
        player = player.attr("class");
        console.log(player);
        
        
        // 선택한 칸의 좌표
        var location = $(this).closest("div");
        location = location.attr("class");
        location = location.split(" ");
        location = location[location.length-1];
        console.log(location);


        // 기물에 따른 행마법
        if(player == "player2") {
            if(unit == "pawn" && location.indexOf("2") != -1){ // 백의 한번도 안움직인 폰일때
                if(location.indexOf("A") != -1){
                   var alphabetArr = ["A","B","C","D","E","F","G","H"];
                   var numArr = ["1","2","3","4","5","6","7","8"];
                   for(i=0; i<8; i++){
                        if(alphabetArr[i] != "A"){
                            if(numArr[i] == "3" || numArr[i] == "4"){
                                $("."+alphabetArr[i]+numArr[i]+" .move").removeClass("show");
                            }
                        } else {
                            if(numArr[i] == "3" || numArr[i] == "4"){
                                $("."+alphabetArr[i]+numArr[i]+" .move").addClass("show");
                            }
                        }
                   }
                }else if(location.indexOf("B") != -1) {
                    $(".B3 .move").toggleClass("show");
                    $(".B4 .move").toggleClass("show");
                }else if(location.indexOf("C") != -1) {
                    $(".C3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".C4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }else if(location.indexOf("D") != -1) {
                    $(".D3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".D4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }else if(location.indexOf("E") != -1) {
                    $(".E3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".E4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }else if(location.indexOf("F") != -1) {
                    $(".F3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".F4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }else if(location.indexOf("G") != -1) {
                    $(".G3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".G4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }else if(location.indexOf("H") != -1) {
                    $(".H3").html("<span class='move'><i class='fas fa-circle'></i></span>")
                    $(".H4").html("<span class='move'><i class='fas fa-circle'></i></span>")
                }
            }
        } else {

        }

    });
});