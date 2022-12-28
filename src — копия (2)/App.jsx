import './App.css';
import React from 'react';
import myVideo from './video/logo2.mp4';

function App() {
        return(
        <div className="app">
                <header>
                        <h1 className="logo">Встреча со сверхпривлекающим  Кришной, дикша-гуру и Его преданными </h1>
                        <nav>
                                <button className="btnHeader" >НАПИШИТЕ НАМ</button>
                                <button className="btnHeader" >ПРИНЯТЬ УЧАСТИЕ</button>
                        </nav>
                </header> 
                <div className="bannerSection">
                        <div className="banner">
                        </div>
                </div>
                <div className="bannerSection">
                        <div className="banner2">
                                <h3> Ретрит с Бхата Бхгатамрита Кешава Свами </h3>
                                <br/>
                                <h2>Нырнуть в океан блаженства и пробудить духовную силу в обществе преданных</h2>
                        </div>
                        </div>
  <div className="liSection">
        <div className="videoContainer">
        <video autoPlay muted loop id="video" width="500px">
        <source src={myVideo} type="video/mp4" />
        </video>
        </div>
   
        <div className="liSection">
        <h3 className='h3Black'>Вам НУЖНО особенное время :</h3>
  <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Погрузится в духовный мир </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Наполниться силой </td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Получить даршан Гуру</td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Отдохнуть  в атмосфере благости</td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Провести время с семьей </td>
    </tr>
  </tbody>
</table>
</div>
    
<div>
    <h3 className='h3Black'>РЕТРИТ с ГУРУ что будет :</h3>
    <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>6 дней погружения </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Гуру пуджа</td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Душевные киртаны с духовным учителем и преданными </td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Джапа медитация с эффективными настройками</td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Детская программ с увлекательными занятиями и играми </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Нектарное совместное служение Божествам</td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Лечебные источники «Мацеста» </td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Увлекательное путешествие в горы </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Аюрведическое лечение и оздоровительные практики 
</td>
    </tr>
  </tbody>
</table>
</div>
<div>
<img src="/img/img3.jpg" className="imgLi" alt="img"></img>
</div>
</div>

<h3 className='h3Black'>ВАМ НУЖНЫ ТАКИЕ КАНИКУЛЫ </h3>
<h3 className='h3Black'>Особенно если ВЫ: </h3>
<div className='img05'>
<img src="/img/vibor.jpg" className="imgVibor" alt="img"></img>
<p className='h3Black'>Стоите перед выбором принятия духовного учителя </p>
</div>
<div className='img05'>
<p className='h3Black'>Хотите духовно развиваться </p>
<img src="/img/img1.jpg" className="imgVibor" alt="img"></img>
</div>
<div className='img05'>
<img src="/img/img4.jpg" className="imgVibor" alt="img"></img>
<p className='h3Black'>Заботитесь о семье и мечтаете воспитать счастливых детей</p>
</div>

<h3 className='h3Black'>МЫ БУДЕМ ОЧЕНЬ ВАМ РАДЫ </h3>
<p className='h3Black'><center>Особенно здесь</center></p>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


       
       
                      


</div>)
        
}
export default App
