var topBar = ["", "Who we are", "Who we aren't", "Policies", "History", "What you can do", "Donate"]

var main = function()
{
    d3.select("#directory")
        .selectAll("div")
        .data(topBar)
        .enter()
        .append("div")
        .attr("class", "nav")
        .append("a").text(function(d){
        
        
        
        
        return d
        
        
    })
        
        
        /*.attr("href", function(d){
        
        
        return d + ".html"
        
        
        
    })
    
    */
    
    
    
    
}
main()