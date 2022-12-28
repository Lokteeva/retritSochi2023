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
<h3 className='h3Black'>слайдер</h3>
<h3 className='h3Black'>Карта</h3>

<div className="liSection">
        <h3 className='h3Black'>Возможности: </h3>
  <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Просторные комфортабельные номера</td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Пространство для санкиртаны</td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Теплое море и большая зеленая территория большого сочинского заповедника</td>
    </tr>
  </tbody>
</table>
</div>
<hr></hr>
<div className="liSection">
        <h3 className='h3Black'>Отдых :</h3>
  <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Аюрведическая программа 5 дней ( за дополнительную плату по рекомендации специалиста )</td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Прасадное 2-х разовое питание с парным молоком </td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Детская площадка</td>
    </tr>
  </tbody>
</table>
</div>

<div className="liSection2">
<h3 className='h3Black'>Баджаны с душой :</h3>
<div>
<img src="/img/img2.jpg" className="imgVertic" alt="img"></img>
</div>   
</div> 

<div className="1liSection">
        <h3 className='h3Black'>ОСОБЕННО ЯРКИЕ ВПЕЧАТЛЕНИЯ </h3>
  <center><table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Атмосфера семьи </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Эффективные практики</td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Бесценные знания</td>
    </tr>
  </tbody>
</table></center>
</div>



<div className='Raspisanie'>
        
        <div></div>
<div>
<h3 className='h3Black'>РАСПИСАНИЕ : </h3>
<p className='Data'>22 мая </p>
Заезд – <br/>
Торжественный прием Бхакти Бхгаватамрита Кешава Свами 
<p className='Data'>28 мая </p>
Завтрак <br/>
Выезд
<p className='Data'>22-28 мая </p>
<p> 07:00 - 07:30   приветствие Божеств, Шри Гуру-вандана</p> 
<p>07:30 - 08:30    Шримад Бхагаватам с Гуру Махараджем </p>
<p>09:00 - 09:45    завтрак</p>
<p>09:45 - 13:15   духовные практики </p>
<p>13:30 - 14:30   ресурсные занятия у моря </p>
<p>14:30 - 15:30    обед</p>
<p>16:30 - 18:00    мастер-классы и практикумы / общение с кураторами</p>
<p>18:00 - 18:30    вечернее молоко</p>
<p>18:30 - 20:00    Кришна и Гаура катха и киртан  </p>
<p>05:00 -07:00    Молоко</p>
</div>
<div></div>   
</div>                      

<h3 className='h3Black'>ВАМ ЭТО НУЖНО </h3>
<h3 className='h3Black'>ОСОБЕННО СЕЙЧАС </h3>

<div className='Putevka'>
        
        <div></div>
<div>
<h3 className='h4Black'>ВЗРОСЛЫЙ ПАКЕТ </h3>
<h3 className='h4Black'><strike>25 000 рублей<br/></strike>
20 000 рублей</h3>

<h3 className='h4Black'>ДЕТСКИЙ ПАКЕТ </h3>
<h3 className='h4Black'>? рублей</h3>


<div>
    <h3 className='h3Black'>За :</h3>
    <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>6 дней проживания вместе с божествами и гуру  </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Трехразовое прасадное питание </td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Духовную программу </td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/img/logo.jpg" className="imgLogo" alt="img"></img>
      </th>
      <td>Оздоровительные утренние практики</td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Ежедневную детскую программу ( отдельно для мальчиков и девочек)  <a href=" ">узнать подробнее</a> </td>
    </tr>
    <tr>
    <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Прекрасное настроение </td>
    </tr>
    <tr>
      <th scope="row"><img src="/img/logo.jpg" className="imgLogo" alt="img"></img></th>
      <td>Возможна оплата в рассрочку на 3 месяца </td>
    </tr>
  </tbody>
</table>
</div>

<nav className='nav2'>
    <button className="btnFooter" >ОСТАВИТЬ ЗАЯВКУ</button>
    <button className="btnFooter" >ПРИНЯТЬ УЧАСТИЕ</button>
</nav>

<h3 className='h3Black'>ВАМ НУЖНО БРОНИРОВАТЬ </h3>
<h3 className='h3Black'>Особенно сейчас </h3>
 <p>Счетчик как на сайте АРТХА </p>
<h3 className='h3Black'>РАСЧЕТ СТОИМОСТИ </h3>

</div>
<div></div>   
</div> 


<footer >
 <p>Познать себя и реализовать свой неповторимый духовный потенциал </p>
<p>Спасибо что вы с нами!</p>
 </footer>

</div>)
        
}
export default App
