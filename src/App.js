import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title : '',
    sumvalue : 0,
    detail : '',
    sumlevel : '',
    days :  [[0,0,0,0,0,0,0,0], 
     [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0]]
  }

  convertNumber = (ch) => {
    if(ch == 'ก' || ch == 'ด' || ch == 'ถ' || ch == 'ท' || ch == 'ภ' 
    || ch == 'า' || ch == 'ำ' || ch == 'ฤ' || ch == '่' || ch == 'ู'){
      return 1
    }else if(ch == 'ข' || ch == 'ช' || ch == 'ง' || ch == 'บ' || ch == 'ป'
    || ch == 'เ' || ch == 'แ' || ch == '้' || ch == 'ู' ){
      return 2
    }else if(ch == 'ฆ' || ch == 'ต' || ch == 'ฑ' || ch == 'ฒ'|| ch == '๋' ){
      return 3
    }else if(ch == 'ค' || ch == 'ธ' || ch == 'ญ' || ch == 'ร' || ch == 'ษ'
    || ch == 'ะ' || ch == 'โ' || ch == 'ั' || ch == 'ิ'){
      return 4
    }else if(ch == 'ฉ' || ch == 'ฌ' || ch == 'ณ' || ch == 'น' || ch == 'ม'
    || ch == 'ห' || ch == 'ฎ' || ch == 'ฮ' || ch == 'ฬ' || ch == 'ึ' ){
      return 5
    }else if(ch == 'จ' || ch == 'ล' || ch == 'ว' || ch == 'อ' || ch == 'ใ' ){
      return 6
    }else if(ch == 'ซ' || ch == 'ศ' || ch == 'ส' || ch == 'ี' || ch == 'ื'
    || ch == '๊' ){
      return 7
    }else if(ch == 'ผ' || ch == 'ฝ' || ch == 'พ' || ch == 'ฟ' || ch == 'ย' 
    || ch == '็' ){
      return 8
    }else if(ch == 'ฏ' || ch == 'ฐ' || ch == 'ไ' || ch == '์' ){
      return 9
    }
    return 0;

  }

  goodNumberLevel = (sum) => {
    if(sum == 2 || sum == 4 || sum == 5 || sum == 6 || sum == 9
      || sum == 14 || sum == 15 || sum == 19 || sum == 23 || sum == 24
      || sum == 36 || sum == 41 || sum == 42 || sum == 45 || sum == 46
      || sum == 50 || sum == 51 || sum == 53 || sum == 55 || sum == 56
      || sum == 59 || sum == 63 || sum == 64 || sum == 65){
        return 2;
    }else if(sum == 20 || sum == 32 || sum ==40 || sum == 44 || sum == 69 
      || sum == 79){
      return 1;
    }else if(sum == 27 || sum == 29 || sum == 30){
      return -1;
    }
    return 0;
  }

  calDays = (name) => {
    let days = [[0,0,0,0,0,0,0,0], //sun 0
    [0,0,0,0,0,0,0,0], //mon 1
   [0,0,0,0,0,0,0,0],//tue 2 
    [0,0,0,0,0,0,0,0],//wed_day 3
    [0,0,0,0,0,0,0,0],//thu 4
    [0,0,0,0,0,0,0,0],//fri 5
    [0,0,0,0,0,0,0,0],//sat 6
    [0,0,0,0,0,0,0,0]];//wed_night 7
    for(let i = 0 ; i < name.length ; i++){
      const ch = name.charAt(i);
      if(ch == 'อ' || ch == 'ะ' || ch == 'า' || ch == 'ิ' || ch == 'ี' 
      || ch == 'ุ' || ch == 'ู' || ch == 'เ' || ch == 'โ'){
        days[0][0] += 1;
        days[1][7] += 1;
        days[2][6] += 1;
        days[3][5] += 1;
        days[4][3] += 1;
        days[5][1] += 1;
        days[6][5] += 1;
        days[7][2] += 1;
      }else  if(ch == 'ก' || ch == 'ข' || ch == 'ค' || ch == 'ฆ' || ch == 'ง' ){
        days[0][1] += 1;
        days[1][0] += 1;
        days[2][7] += 1;
        days[3][6] += 1;
        days[4][4] += 1;
        days[5][2] += 1;
        days[6][5] += 1;
        days[7][3] += 1;
      }else  if(ch == 'จ' || ch == 'ฉ' || ch == 'ช' || ch == 'ฌ' || ch == 'ญ' ){
        days[0][2] += 1;
        days[1][1] += 1;
        days[2][0] += 1;
        days[3][7] += 1;
        days[4][5] += 1;
        days[5][3] += 1;
        days[6][6] += 1;
        days[7][4] += 1;
      }else  if(ch == 'ฎ' || ch == 'ฏ' || ch == 'ฐ' || ch == 'ฑ' || ch == 'ฒ' || ch == 'ณ' ){
        days[0][3] += 1;
        days[1][2] += 1;
        days[2][1] += 1;
        days[3][0] += 1;
        days[4][6] += 1;
        days[5][4] += 1;
        days[6][7] += 1;
        days[7][5] += 1;
      }else  if(ch == 'ด' || ch == 'ต' || ch == 'ถ' || ch == 'ท' || ch == 'ธ' || ch == 'น' ){
        days[0][4] += 1;
        days[1][3] += 1;
        days[2][2] += 1;
        days[3][1] += 1;
        days[4][7] += 1;
        days[5][5] += 1;
        days[6][0] += 1;
        days[7][6] += 1;
      }else  if(ch == 'บ' || ch == 'ป' || ch == 'ผ' || ch == 'ฝ' || ch == 'พ' || ch == 'ฟ' || ch == 'ภ' || ch == 'ม' ){
        days[0][5] += 1;
        days[1][4] += 1;
        days[2][3] += 1;
        days[3][2] += 1
        days[4][0] += 1;
        days[5][6] += 1;
        days[6][1] += 1;
        days[7][7] += 1;
      }else  if(ch == 'ย' || ch == 'ร' || ch == 'ล' || ch == 'ว'  ){
        days[0][6] += 1;
        days[1][5] += 1;
        days[2][4] += 1;
        days[3][3] += 1
        days[4][1] += 1;
        days[5][7] += 1;
        days[6][2] += 1;
        days[7][0] += 1;
      }else  if(ch == 'ศ' || ch == 'ษ' || ch == 'ส' || ch == 'ห' || ch == 'ฬ' || ch == 'ฮ'  ){
        days[0][7] += 1;
        days[1][6] += 1;
        days[2][5] += 1;
        days[3][4] += 1
        days[4][2] += 1;
        days[5][0] += 1;
        days[6][3] += 1;
        days[7][1] += 1;
      }
    }
    return days;
  }

 

  handleChange = (event) => {
    let val = event.target.value;
    if(!val){
      val = val.trim();
    }
    let sumvalue = 0;
    let detail = '';
    for(let i = 0 ; i < val.length ; i++){
      const ch = val.charAt(i);
      let num = this.convertNumber(ch);
      sumvalue += num;
      if(detail != '') {
        detail += ' + '
      }
      detail += ` ${ch} (${num})`
    }
    let sumlevel = this.goodNumberLevel(sumvalue);
    let days = this.calDays(val);
    this.setState({title: val, sumvalue , detail , sumlevel , days})
  }

  showSumLevel =() => {
    let ressum = this.state.sumlevel;
    let sumlevel = 'ปกติ';
    let color = 'black';
    if(ressum == 2){
      sumlevel ='ดีมาก'
      color = 'green';
    }else if(ressum == 1){
      sumlevel = 'ดี'
      color = 'blue';
    }else if(ressum == -1){
      sumlevel = 'ให้โทษ'
      color = 'red';
    }
    return (
      <span style={{'color' : color}}>เลขศาสตร์ = {sumlevel}</span>
    );
  }

  showDays = () => {
    const days = this.state.days;
    console.log('days' , days)
    let out = '';
   /* for(let i = 0 ;i < days ;i ++){
      const arr = days[i];
      */
    return  days.map((arr , i) => {
      let day = '';
      if(i == 0){
        day ='วันอาทิตย์'
      }else if(i == 1){
        day ='วันจันทร์'
      }else if(i == 2){
        day ='วันอังคาร'
      }else if(i == 3){
        day ='วันพุธกลางวัน'
      }else if(i == 4){
        day ='วันพฤหัส'
      }else if(i == 5){
        day ='วันศุกร์'
      }else if(i == 6){
        day ='วันเสาร์'
      }else if(i == 7){
        day ='วันพุธกลางคืน'
      }
      return (<tr key={i}>
          <td>{day}</td>
          <td className={arr[0]? 'text-success font-weight-bold': ''}>{arr[0]}</td>
          <td className={arr[1]? 'text-success font-weight-bold': ''}>{arr[1]}</td>
          <td className={arr[2]? 'text-success font-weight-bold': ''}>{arr[2]}</td>
          <td className={arr[3]? 'text-success font-weight-bold': ''}>{arr[3]}</td>
          <td className={arr[4]? 'text-success font-weight-bold': ''}>{arr[4]}</td>
          <td className={arr[5]? 'text-success font-weight-bold': ''}>{arr[5]}</td>
          <td className={arr[6]? 'text-success font-weight-bold': ''}>{arr[6]}</td>
          <td className={arr[7]? 'text-danger': ''}>{arr[7]}</td>
          </tr>);
     });
     
 //   }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Good Name</h1>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        </header>
        <div className="container">
    <br/>
        <h2>
        <input type="text" name="title" style={{'fontSize':'25px'}} value={this.state.title} onChange={this.handleChange}/>
        </h2>
       
        
        <h2>
          { this.state.detail}
          </h2>
        <h2>
          ผลรวม = { this.state.sumvalue}
          </h2>
          <h2>  
          { this.showSumLevel()}
          </h2>
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-striped">
                   <thead>
                     <tr>
                      <th>date</th>
                      <th>บริวาร</th>
                      <th>อายุ</th>
                      <th>เดช</th>
                      <th>ศรี</th>
                      <th>มูละ</th>
                      <th>อุสาหะ</th>
                      <th>มนตรี</th>
                      <th>กาลกิณี</th>
                     </tr>
                    </thead>
                    <tbody>{this.showDays()}</tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
