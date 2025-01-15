import React from 'react';
import { ArrowLeft, Play, Pause, Volume2, SkipBack, SkipForward, Maximize, ThumbsUp, Share2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoMamalia = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = React.useState(true);

  const videos = [
    {
      id: 1,
      title: "Kehidupan Singa di Alam Liar",
      duration: "10:25",
      thumbnail: "https://img.pikbest.com/origin/10/12/20/02rpIkbEsTdSf.jpg!w700wp",
      views: "1.2k",
      description: "Pelajari tentang kehidupan singa di habitat alaminya, bagaimana mereka berburu dan hidup dalam kelompok yang disebut pride. Video ini akan mengajarkan kita tentang perilaku sosial singa, cara berburu, dan cara mereka membesarkan anak-anak mereka."
    },
    {
      id: 2,
      title: "Gajah Afrika: Sang Raksasa Cerdas",
      thumbnail: "https://img.pikbest.com/origin/10/41/94/34WpIkbEsTXI3.jpg!w700wp",
      views: "985",
      duration: "8:45"
    },
    {
      id: 3,
      title: "Lumba-lumba: Mamalia Laut yang Mengagumkan",
      thumbnail: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2052_lumba-lumba.jpg",
      views: "1.5k",
      duration: "12:30"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-600 hover:text-purple-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali
          </button>
        </div>
      </div>

      {/* Video Player Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Main Video Display */}
          <div className="relative aspect-video bg-gray-900">
            <img 
              src="https://awsimages.detik.net.id/content/2015/02/23/1520/sing.jpg" 
              alt="Video Player"
              className="w-full h-full object-cover"
            />
            
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6">
              {/* Progress Bar */}
              <div className="w-full bg-gray-400/50 h-1.5 rounded-full mb-4 cursor-pointer">
                <div className="bg-purple-500 h-1.5 rounded-full w-1/3 relative">
                  <div className="w-4 h-4 bg-purple-500 rounded-full absolute right-0 -top-1/2 transform -translate-y-1/2 shadow-lg"></div>
                </div>
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)} 
                    className="hover:text-purple-400 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7" />}
                  </button>
                  <button className="hover:text-purple-400 transition-colors">
                    <SkipBack className="w-5 h-5" />
                  </button>
                  <button className="hover:text-purple-400 transition-colors">
                    <SkipForward className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5" />
                    <div className="w-24 bg-gray-400/50 h-1.5 rounded-full">
                      <div className="bg-white h-1.5 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">3:45 / 10:25</span>
                </div>
                <button className="hover:text-purple-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{videos[0].title}</h1>
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="text-gray-600">
                <span className="mr-4">{videos[0].views} tayangan</span>
                <span>Dipublikasikan 2 hari yang lalu</span>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Suka</span>
                </button>
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                  <Share2 className="w-5 h-5" />
                  <span>Bagikan</span>
                </button>
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
                  <BookOpen className="w-5 h-5" />
                  <span>Catatan</span>
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">{videos[0].description}</p>
          </div>
        </div>

        {/* Related Videos */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">Video Pembelajaran Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded-lg text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 hover:text-purple-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{video.views} tayangan</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoMamalia;