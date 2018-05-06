import React, { Component } from 'react';

class Nutrition extends Component{

    render(){
        const i = this.props.index;
        if(i === false){
            return (
                <div></div>)
        }else{
            var nutrients = this.props.recipes[i].recipe.digest;
            var totalCal = Math.ceil(this.props.recipes[i].recipe.calories);
            var totalServ = Number((this.props.recipes[i].recipe.yield).toFixed(1));
            var servSize = Number((this.props.recipes[i].recipe.totalWeight / totalServ).toFixed(1));
            var calPer = Number((totalCal/totalServ).toFixed(1));
            return (<div className="nutrition-col">
                <p className="total-nutes">Total Servings<span className="nutes-right">about {totalServ}</span> <br />
                    Serving Size<span className="nutes-right">about {servSize}g</span> <br />
                    Calories per Serv.<span className="nutes-right">{calPer}</span> <br />
                    Calories per (g)<span className="nutes-right">{Number((calPer / servSize).toFixed(1))}</span>
                </p>
                    {nutrients.map(nutrients => (
                        <div className="nutes"
                            key={Math.random()}>
                            <span className="nute-labels">
                                {nutrients.label}
                            </span>
                            <span className="nutes-right">
                                {(nutrients.total / totalServ).toFixed(1)} 
                                {nutrients.unit}
                            </span>
                        </div>)
                    )}
            </div>
            )}
        }
}
export default Nutrition;