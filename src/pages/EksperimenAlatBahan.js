import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const alatList = [
  { nama: "Pipet Tetes", image: "https://cdn.pixabay.com/photo/2016/03/31/19/46/dropper-1295283_640.png", required: true },
  { nama: "Tusuk Gigi", image: "https://png.pngtree.com/png-clipart/20231212/original/pngtree-wooden-toothpicks-in-a-glass-the-isolated-background-to-brush-teeth-png-image_13821834.png", required: false },
  { nama: "Kaca Preparat", image: "https://images.tokopedia.net/img/cache/200-square/product-1/2019/3/20/129383/129383_6d8ca554-2b8d-4a59-9f10-4b720b72be9d.jpg", required: true },
  { nama: "Mortar & Pistil", image: "https://www.thegifthunter.co.nz/wp-content/uploads/Pestle-and-Mortar-400x480.jpg", required: false },
  { nama: "Tabung Reaksi", image: "https://static-siplah.blibli.com/data/images/SCFA-0031-00289/1dcc870e-ac8a-42e6-b8c3-c4279d67bb2f.jpeg", required: true },
  { nama: "Erlenmeyer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LZ3d3qePlS-QtfhyWuxzojFJCjgmJ0koMQ&s", required: false },
];

const bahanList = [
  { nama: "Serum Anti-A", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-A.png", required: true },
  { nama: "Serum Anti-B", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-B.png", required: true },
  { nama: "Serum Anti-AB", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-AB.png", required: false },
  { nama: "Serum Anti-D", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-D.png", required: true },
  { nama: "Alkohol 70%", image: "https://storage.googleapis.com/rxstorage/Product/large/Apotek_Online_Farmaku_com_Alkohol_70_Afiat_100_ml.jpg", required: false },
  { nama: "Biuret", image: "https://images.tokopedia.net/img/cache/700/product-1/2016/2/1/2446149/2446149_484c6515-a66c-4aaa-bb29-f54abc0ba05e.jpg", required: false },
];

const darahList = [
  { nama: "Darah Pasien 1", image: '/gambar/blood.png', required: true },
  { nama: "Darah Pasien 2", image: '/gambar/blood.png', required: true },
  { nama: "Darah Pendonor 1", image: '/gambar/blood.png', required: false },
  { nama: "Darah Pendonor 2", image: '/gambar/blood.png', required: false },
];

const EksperimenAlatBahan = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState([]);
  const [popupTitle, setPopupTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const showRequiredAlatPopup = () => {
    const requiredAlat = alatList.filter(item => item.required);
    setPopupTitle("Daftar Alat Wajib");
    setPopupContent(requiredAlat.map(item => ({ nama: item.nama })));
    setPopupVisible(true);
  };

  const showRequiredBahanPopup = () => {
    const requiredBahan = [...bahanList, ...darahList].filter(item => item.required);
    setPopupTitle("Daftar Bahan Wajib");
    setPopupContent(requiredBahan.map(item => ({ nama: item.nama })));
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleItemClick = (itemName, list) => {
    const selectedItem = list.find(item => item.nama === itemName);
    
    if (selectedItem) {
      setSelectedItems(prev => ({
        ...prev,
        [itemName]: !prev[itemName]
      }));
    } else {
      alert("Item tidak valid!");
    }
  };

  const validateSelection = () => {
    const requiredAlat = alatList.filter(item => item.required);
    const requiredBahan = [...bahanList, ...darahList].filter(item => item.required);

    const allRequiredAlatSelected = requiredAlat.every(
      item => selectedItems[item.nama]
    );
    
    const allRequiredBahanSelected = requiredBahan.every(
      item => selectedItems[item.nama]
    );

    return allRequiredAlatSelected && allRequiredBahanSelected;
  };

  const handleNavigate = () => {
    if (validateSelection()) {
      navigate("/eksperimen-puzzel");
    } else {
      setErrorMessage("Harap pilih semua alat dan bahan yang diperlukan!");
      setPopupVisible(true);
      setPopupTitle("Peringatan");
      setPopupContent([
        { nama: "Periksa kembali pilihan Anda" },
        { nama: "Pastikan semua item wajib sudah dipilih" }
      ]);
    }
  };

 const renderItemGrid = (title, itemList) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
    {/* Bagian judul dan tombol */}
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-black text-center">{title}</h3>
      <button 
        onClick={title === "Alat" ? showRequiredAlatPopup : showRequiredBahanPopup}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Lihat {title}
      </button>
    </div>

    {/* Grid item */}
    <div className="flex justify-center gap-6 flex-wrap">
      {itemList.map((item, index) => (
        <div
          key={index}
          className={`
            flex flex-col items-center w-40 cursor-pointer 
            ${selectedItems[item.nama] ? 'bg-purple-100' : ''}
            border-2 ${selectedItems[item.nama] ? 'border-purple-500' : 'border-gray-300'}
          `}
          onClick={() => handleItemClick(item.nama, itemList)}
        >
          <div className="w-32 h-32 object-contain mb-2">
            <img 
              src={item.image} 
              alt={item.nama} 
              className="w-full h-full object-contain" 
            />
          </div>
          <p className={`
            text-gray-600 text-xs text-center 
            ${selectedItems[item.nama] ? 'font-bold text-purple-600' : ''}
          `}>
            {item.nama}
          </p>
        </div>
      ))}
    </div>
  </div>
);


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mb-8 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pilih Alat dan Bahan Eksperimen
          </h1>
          <p className="text-xl mb-4">
            Persiapkan alat dan bahan untuk memulai eksperimen Anda dengan memilih item berikut.
          </p>
        </div>
      </div>
  
      <div className="container mx-auto">
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
  
        <div className="space-y-6">
          {renderItemGrid("Alat", alatList)}
          {renderItemGrid("Bahan", [...bahanList, ...darahList])}
        </div>
  
        <div className="text-center mt-8">
          <button
            onClick={handleNavigate}
            className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600"
          >
            Mulai Eksperimen
          </button>
        </div>
  
        {/* Popup */}
        {popupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
              <h3 className="text-xl font-bold text-red-600 mb-4">{popupTitle}</h3>
              <ul className="list-disc pl-5">
                {popupContent.map((item, index) => (
                  <li key={index} className="text-gray-800 mb-2">{item.nama}</li>
                ))}
              </ul>
              <button 
                className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600" 
                onClick={closePopup}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EksperimenAlatBahan;