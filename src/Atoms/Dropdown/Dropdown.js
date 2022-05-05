import React,{useState} from "react";
import { Dropdown } from "react-bootstrap";



const DropdownSelect=()=>{

  //     List OF CITY
  const [city, setCity] = useState("Dehradun")

  // function
  function citySelect(e) {
    setCity(e)
  }

  console.log(city)
          return (
           <div className="">
 <div className="form-group dropSelect">
             <Dropdown className="hidden lg:block py-2">
              <Dropdown.Toggle id="dropdown-basic" >
                <i className="fa fa-map-marker fa-fw float-left text-sm"></i> <span className="float-left text-sm"> &nbsp;{city}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <input type={`text`} placeholder="Search Your City " className="mx-2 mb-0 p-2  searchcity "/>
              <hr className="m-0"/>
              <div className="mb-2">

              </div>
                {options.sort().filter((items)=>items).map((items, i) => (
                  <Dropdown.Item className="py-2 text-xl" onClick={(e) => citySelect(items)} href="#"> <i className="fa fa-map-marker fa-2x fa-fw"></i> <span >{items}</span></Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            </div>
           </div>
          )
      
      }
      
      // a select with dynamically created options
      const options = ["Dehradun","","Rishikesh","Mumbai","Solan","Bengaluru","Srinagar","Rohru","Uttarkashi","New Delhi","Ahmedabad","Masuri","Shimla","Manali","Kullu","Kangra","Mussoorie","Dharamshala","Narkanda","Seoni","Tehri","Haridwar","Bijnor","Meerut","Chandigarh","Tiruverambur","Kharar","Kolkata","Gadarpur","Haldwani","Gauchar","Almora","Kashipur","Basti","Delhi","Raipur","Nainital","Bhowali","Bhim Tal","Pithoragarh","Ranikhet","Kotdwara","Mohali","Jaipur","Saharanpur","Coimbatore","Thane","Zirakpur","Panchkula","Roorkee","Lucknow","Muzaffarnagar","Banur","select","Ghaziabad","Kulu","Tirupati","Hyderabad","Chennai","Visakhapatnam","Pune","Navi Mumbai","Udaipur","Kota","Jhajjar","Anantapur","Jhansi","Bhilai","Ludhiana","Bikaner","Chittoor","Ranchi","Panaji","Samrala","Rudrapur","Allahabad","Ramgarh","Rohtak","Kharagpur","Goa","Karanja","Pilani","Munger","Indore","Vasai","Chittaranjan","Valsad","Gaya","Kalyan","Gurgaon","Jabalpur","Bareilly","Nashik","Khanna","Ranaghat","Vijayawada","Patna","Aligarh","Patiala","Akola","Varanasi","Nagpur","Palwal","Jamshedpur","Srikakulam","Sirsa","Sompeta","Bhubaneswar","Mahabubabad","Bhimavaram","Noida","Ajmer","Moradabad","Daman","Latehar","Tirumala","Sonipat","Unnao","Amravati","Bhopal","Thanjavur","Kumbakonam","24 Parganas (n)","Kottayam","Davangere","Phagwara","Palai","Dhanbad","Kanpur","Kozhikode","Ottappalam","Ottapalam","Vrindavan","Rajkot","Jodhpur","Ambala Cantt","Thrissur","Latur","Satna","Pauri","Agra","Namakkal","Bobbili","Solapur","Ooty","Kurnool","Shivpuri","Hisar","Bharuch","Virar","Aurangabad","Bulandshahar","Faridabad","Dombivli","Surat","Ernakulam","Palakkad","Yamunanagar","Sambalpur","Bundi","Shimoga","Kannauj","Rourkela","Thrippunithura","Vasco","Kayamkulam","East Godavari Dist.","Siliguri","Jalpaiguri","Parlakimidi","Mangalore","Mangaluru","Alappuzha","Panvel","Chhindwara","Chintamani","Secunderabad","Barrackpore","Gondia","Edaganasalai","Belgaum","Mathura","Patratu","Navi Mumbai Panvel","Mahbubnagar","Agartala","Nizamabad","Howrah","Asansol","Barddhaman","Gwalior","Gorakhpur","Margao","Ponda","Porbandar","Adyar","Channarayapatna","Kishangarh","Pallavaram","Chamoli and Gopeshwar","Rudraprayag","Candolim","Puri","Jammu","Katihar","Thiruchirapalli","Jalgaon","Barabanki","Thiruvananthapuram","Muvattupuzha","Guwahati","Kannur","Kolar","Ahmednagar","Tirunelveli","Kochi","Tirupur","Kopargaon","Sikar","Bellary","Hissar","Malappuram","Tezpur","Salem","Rewa","Bilaspur","Vadodara","Bombuflat","Jorhat","\u0932\u0916\u0928\u090a","Madgaon","Laksar","Madurai","Barka Kana","Greater Noida","Nagercoil","Warangal","Palghar","Herbertpur","Rurki","Avadi","Ramnagar","Udham Singh Nagar","Sitarganj","Mysore","Amritsar","Una","Halvad","Champawat","Hamirpur","Darbhanga","Bihar Sharif","Chamba","Rajgir","Dalhousie","Palampur","Bhuntar","Paonta Sahib","Mandi","Bageshwar","Solon","Nalagarh","Dera Gopipur","Bhagalpur","Ajnala","Naya Nangal","Majitha","Jalandhar","Batala","Faridkot","Rajpura","Kapurthala","Morinda","Anandpur Sahib","Kot Isa Khan","Nurmahal","Urmar Tanda","Nakodar","Nahan","Rampur","Parwanoo","Jawala Mukhi","Talai","Arki","Baddi","Bhankharpur","Sundarnagar","Kurukshetra","Moga","Bhogpur","Sultanpur Lodhi","Budhlada","Rupnagar","Kot Kapura","Kurali","Arambagh","Gandhinagar","Panipat","Sarka Ghat","Nurpur","Gagret","Rajgarh","Tumkur","Hoskote","Ambala","Shirdi","Sahnewal","Bhiwani","Sankhol","Karnal","Bahadurgarh","Rewari","Ellenabad","Ghraunda","Ratiya","Jind","Kaithal","Charkhi Dadri","Hansi","Dumjor","Bagnan","Haringhata","Durgapur","Burdwan","Kolaghat","Madhyamgram","Belagula","Mansinhapur","Belebathan","Midnapur","Bhandardaha","Begampur","Pandua","Barijhati","Khandra","Gairkata","Beldanga","Bishnupur","Barasat","Hooghly","Mahishadal","Rajarhat Gopalpur","Ulubaria","Ghatal","Malda","Bankura","Kaliyaganj","Chandannagar","Chhatarpur","Mandsaur","Vidisha","Khargone","Lateri","Ujjain","Sagar","Sarni","Sehore","Panara","Damoh","Ratlam","Neemuch","Pipliya Mandi","Jamai","Betul","Bina-Etawa","Nangal","Guna","Kolaras","Hoshangabad","Sanwer","Amarwara","Chitrakut","Churhat","Bagli","Satai","Banda","Sanawad","Amanganj","Gadarwara","Pipariya","Rampur Baghelan","Chichli","Kareli","Narsimhapur","Baraily","Basoda","Sailana","Kanad","Lachhmangarh","Narsinghpur","Udaipura","Bhind","Suhagi","Chanderi","Amlai","Hatta","Loharda","Dhamnod","Tendukheda","Harrai","Kalichhapar","Makronia","Sohagpur","Sidhi","Morar","Dewas","Balaghat","Burhanpur","Itarsi","Isagarh","Sabalgarh","Rajakhedi","Katni","Barhi","Idukki","Anand","Pondicherry","Mettupalayam","Jagatsinghapur","Chiplun","Kotagiri","Kanjirappalli","Kollam","Bhalki","Munnar","Andada","Fatehgarh Sahib","24 Parganas (s)","Nagaur","Chittorgarh","Mount Abu","Lonavala","Barwala","Ranga Reddy district","Medak","Adilabad","Hubli","Bhilwara","Cuttack","Mahadevapura","Nabha","Patharia","Badagaon","Ashoknagar","Raghogarh","Telgaon","Changlang","Bommanahalli","Perundurai","Varkala","Ganganagar","Lilong","Muzaffarpur","Achhnera","Pimpri","Asarganj","Bhiwandi","Logahat","Devaprayag","Alwar","Kalamassery","Chilakaluripet","Bharatpur","Mirzapur","Pathanamthitta","Alangad","Basavana Bagevadi","Dhule","Maihar","Tirupathur","Bardez","Chicalim","Valpoi","Saligao","Mapusa","Porvorim","Arpora","Chikmagalur","Kakkodi","Kasaragod","Chirakkal","Ulhasnagar","Sangareddy","Corlim","Dona Paula","Taleigao","Margaon","Pernem","Salcette","Miramar","Siolim","Verna","Navelim","Bambolim","Sancoale","Penha de Franca","Raiwala","Aklera","Kolhapur","Nilagiri","Vapi","Lakhimpur","Tinsukia","Goalpara","Haflong","Tira Sujanpur","Jagadhri","Bharoli Kalan","Belluru","Achhalda"]


      export default DropdownSelect