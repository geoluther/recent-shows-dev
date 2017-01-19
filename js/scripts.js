

// format uri like this:
// http://comrad.kgnu.org/playlist/ajax/geteventsbetween.php?start=2016-11-04&end=2016-11-07
// can time be added as a parameter too?

// note: gets show info, does not return the playlist.
// the call returns all events! (underwriting, IDs)

// just want: type: ScheduledShowInstance and recordaudio = 1.
// date returned in unix timestamp, not a date object!
// get DJ Info, show name, archive URL
// gets show id, get playlist from showID
// Show Name = Attributes.Host.Attributes.Name
// DJ = Attributes.ScheduledEvent.Attributes.Event.Attributes.Title
// archive_link = Attributes.RecordedFileName

// for playlist: http://comrad.kgnu.org/playlist/ajax/getfullplaylistforshowinstance.php?showid=95899
// todo in this script: json pretty print!

// utility to convert timestamps
function getTimeStart() {

	var timeNow = Date.now();
	var sevenDays = 604800000;
	var OneDay = 86400000;
	var lastWeek = timeNow - OneDay * 3;

	// comrad: 1478574671 (unix seconds)
	// js time: 1484178938834 (epoch milliseconds)

	var now = new Date(timeNow);
	var then = new Date(lastWeek);
	var nowSeconds = Math.floor(timeNow / 1000);
	var thenSeconds = Math.floor( lastWeek / 1000);

	console.log(timeNow);
	console.log(lastWeek);
	console.log("Now: ", now);
	console.log("Then: ", then);
	console.log("10 Dig Now: ", Math.floor(now / 1000));
	console.log("10 Dig Then: ", Math.floor(then / 1000));


	return {"now": now, "then": then, "end": nowSeconds, "start": thenSeconds};

}




// http://comrad.kgnu.org/playlist/ajax/getfullplaylistforshowinstance.php?showid=95899
function getShows(start, end) {
	// start, end in milliseconds
	var s = start;
	var e = end;
	console.log(s, e);
	var params = "?start=" + start + "&end=" + end;
	console.log(params);
	var baseURL = "http://comrad.kgnu.org/playlist/ajax/geteventsbetween.php";
	URL = baseURL + params;
	console.log(URL);

	$.getJSON(URL, function(data) {
		console.log(data);
	});
}

function getPlaylist(showid) {
	test = "95899";
	params = "showid=" + test;
	baseURL = "http://comrad.kgnu.org/playlist/ajax/getfullplaylistforshowinstance.php?"
	query = baseURL + params
	$.getJSON(URL, function(data){
		console.log(data);
	});
}


var d = getTimeStart();
console.log(d);
getShows(d.start, d.end);
getPlaylist("95899");
