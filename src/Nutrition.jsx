import React, { Component } from 'react';

class Nutrition extends Component{

    render(){
        const i = this.props.index;
        if(i === false){
            return (
                <div className="nutrition-col">
                    Nutritional Info...
                </div>)
        }else{
            var nutrients = this.props.recipes[i].recipe.digest;
            var totalCal = Math.ceil(this.props.recipes[i].recipe.calories);
            var totalServ = Number((this.props.recipes[i].recipe.yield).toFixed(1));
            var servSize = Number((this.props.recipes[i].recipe.totalWeight / totalServ).toFixed(1));
            var calPer = Number((totalCal/totalServ).toFixed(1));
            console.log(totalCal, totalServ, servSize, calPer);
            return (<div className="nutrition-col">
                <p className="total-nutes">Total Servings = ~{totalServ} <br />
                    Serving Size = ~{servSize}g <br />
                    Calories per Serv. = {calPer} <br />
                    Calories per (g) = {Number((calPer / servSize).toFixed(1))}
                </p>
                <table>
                    <tbody>
                    {nutrients.map(nutrients => (
                        <tr className="nutes">
                            <td className="nute-labels">
                                {nutrients.label}
                            </td>
                            <td className="nute-value">
                                {(nutrients.total / totalServ).toFixed(1)} 
                                {nutrients.unit}
                            </td>
                        </tr>)
                    )}
                    </tbody>
                </table>
            </div>
            )}
        }
}
export default Nutrition;