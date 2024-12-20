const LiveVideo = () => (
    <div className="widget">
      <h2 className="text-lg font-semibold mb-4">Live Video Feed</h2>
      <iframe
        src="https://www.youtube.com/embed/5_XSYlAfJZM"
        className="w-full h-64 rounded-md"
        frameBorder="0"
        allowFullScreen
        title="Live Video"
      />
    </div>
  );
  
  export default LiveVideo;
  