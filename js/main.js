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


        // 이동범위 & 공격범위 표시
        // if (player == "player2"){
        //     if(unitName == "rook"){
                
        //     }
        //     if(unitName == "knight"){

        //     }
        //     if(unitName == "bishop"){

        //     }
        //     if(unitName == "queen"){

        //     }
        //     if(unitName == "king"){

        //     }
        //     if(unitName == "pawn"){

        //     }
        // }
        // if (player == "player1"){
        //     if(unitName == "rook"){
                
        //     }
        //     if(unitName == "knight"){

        //     }
        //     if(unitName == "bishop"){

        //     }
        //     if(unitName == "queen"){

        //     }
        //     if(unitName == "king"){

        //     }
        //     if(unitName == "pawn"){

        //     }
        // }
    });
});