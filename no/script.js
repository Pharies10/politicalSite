
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