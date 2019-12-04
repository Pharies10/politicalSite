
//  note that this must be in every js page that is created. 

var topBar = [{ text: "", call: ""},
              { text: "Who we are", call: "about"},
              { text: "Who we aren't", call: "no"},
              { text: "Policies", call: "policies"},
              { text: "History", call: "history"},
              { text: "What you can do", call: "you"},
              { text: "Donate", call: "donate"}]
    
    
    
    
    
    


var main = function()
{
    d3.select("#directory")
        .selectAll("div")
        .data(topBar)
        .enter()
        .append("div")
        .attr("class", "nav")
        .append("a").text(function(d){
        
        
        
        
        return d.text
        
        
    }).on("click", function(l){
        
        location.href = "../"+ l.call + "/" + l.call + ".html"
        
        
        
        
    })
    
    
    
    
    d3.select("#title").on("click", function(){
        
        
        location.href = "../index.html"
        
        
        
        
        
    })
        

    
    
    
    
}
main()







var buttons = [
    {call:"gun", name:"Gun Check"},
    {call:"eco", name:"Economic"},
              
              {call:"mental", name:"Mental Health"},
              {call:"for", name:"Foriegn Affairs"},
              {call:"gerry", name:"Gerrymandering"},
               {call:"abort", name:"Abortion"}]


var makeBtn = function()
{
    
    d3.select("#btnHolder")
        .append("div").style("text-align", "center").style("color", "black").style("height", 100 +'px').style("width", 100 +'%')
        .text("Click on a Policy").style("font-size", 25+"pt").style("margin-top", 20+"px").style("margin-bottom", 20+"px")
        .selectAll("div")
        .data(buttons)
        .enter()
        .append("div")
        .append("button")
        .attr("class", "btn")
        .text(function(d){
        
        return d.name
        
        
    }).on("click", function(d){
        
        for (items in buttons)
        {
            d3.select("#" + buttons[items].call).style("visibility", "hidden")
            
            
        }
        
       
        d3.select("#" + d.call).style("visibility", "visible")
        
        
        
        
    })
    
    
    
    
    
    
    
    
    
}

makeBtn()





