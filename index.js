  window.___gcfg = {
            lang: 'en-US'
          };
            $("#myForm").submit(function(event){
              event.preventDefault()

              var turl = $("#url").val()

              var token = "1ebfb4"
              //var key = "1ebfb4"
              //var urlt = "https://screenshotapi.net/api/v1/screenshot?url="+ turl+ "&token=" +token

              //this is the image
              var urlt = "https://api.screenshotmachine.com?url="+ turl+ "&key=" +token +"&dimension=1920x1080" +"&format=jpg"
              //window.location.href= urlt


              //console log
              console.log('<img src="' + urlt + '">');
              alert("Image src is in console")

               //client id
              var clientid ='268895831899-01pm6r6bjc0rpkm5iqdf5vnbf75h2f77.apps.googleusercontent.com'
              //Client Secret
              var clientsecret ='EenEW-s0xVBCaNM4FhpG44hd'

              var scopes ='https://www.googleapis.com/auth/drive'

              const tmp = "https://script.google.com/d/10eIgaTQ6x7O_PWzjSsD3b6wh5Os7K-hgEsMPstT8JgnlxULYNqTiYK4h/edit"
             
        
                  var dropbox = urlt.FirstName + urlt.LastName;

                  var myFolder = DriveApp.getFoldersByName("mydrive").next();

                  var folder, folders = DriveApp.getFoldersByName(dropbox);

                  if (folders.hasNext()) {
                    folder = folders.next();
                  } else {
                    folder = parentFolder.createFolder(dropbox); //edit this line
                  }

                  var blob = urlt.myFile;
                  var file = folder.createFile(blob); 

                  file.setDescription("Uploaded by " + urlt.Name);

                  return "Thank you, your file was uploaded successfully!";
               

             /* const drive = google.drive({version: 'v3'}, clientid)
              drive.files.create({
                resource: filemta,
                media: media,
                fields: 'id'
              }, (err, res) =>{
                if (err) return console.log('The API returned an error: ' + err)
              })
*/


          /*    HTTP/1.1 200 OK
              Location: https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable&upload_id=xa298sd_sdlkj2
              Content-Length: 0

              var imgcontent = {
                'name' : '$ID'
              }

              var immedia ={
                mimeType : 'image/jpeg'
                body: fs.createReadStream(urlt)
              }

              drive.files.create(){
                resource : imgcontent,
                media : immedia,
                fields: 'id'
              }, function(err,file){
                if(err){
                  console.error(err)
                } else{
                  console.log("file id:", file.id)
                }
              }*/



              //save to file
              // gapi.savetodrive.render('savetodrive-div', {
              //   src: urlt,
              //   filename: urlt,
              //   sitename: '$ID'
              // });
           

              
              


             /* ARGS=(
              --data-urlencode "key=$CUSTOMER_KEY" \
              --data-urlencode "dimension=$DIMENSION" \
              --data-urlencode "device=$DEVICE" \
              --data-urlencode "format=$FORMAT" \
              --data-urlencode "cacheLimit=$CACHE_LIMIT" \
              --data-urlencode "delay=$DELAY" \
              --data-urlencode "zoom=$ZOOM" \
              --data-urlencode "url=$URL"
              )

              if [[ -n "$SECRET_PHRASE" ]]; then
                HASH=$(echo -n $URL$SECRET_PHRASE | md5sum | cut -d ' ' -f 1)
                ARGS+=(--data-urlencode "hash=$HASH")
              fi

              curl -Gs "https://api.screenshotmachine.com" "${ARGS[@]}" > output.png*/

              //save the img and show the contects
             /* $.get(url,function(data){
                console.log(data)
                $("#img").attr('src',data.screenshot)
              })*/


              //upload at googledrive link
            /* var clientid='268895831899-01pm6r6bjc0rpkm5iqdf5vnbf75h2f77.apps.googleusercontent.com'

              var destination_id='https://drive.google.com/drive/folders/1XdToDMKtXdZZkU7hNlQGMjrWpBZoCPI8?usp=sharing'
              var scope = "https://drive.google.com/drive/folders/1XdToDMKtXdZZkU7hNlQGMjrWpBZoCPI8?usp=sharing";


              var contentype ='image/jpg'
              var desti = DriveApp.getFolderbyId(destination_id)

              var img = urlt.getAs(contentype)

              desti.createFile(img)

               var script = document.createElement('script');
              script.onload=this.handleClientLoad;
              script.src="https://apis.google.com/js/api.js";
              document.body.appendChild(script);

              */
              //client id
              //268895831899-01pm6r6bjc0rpkm5iqdf5vnbf75h2f77.apps.googleusercontent.com

              //Client Secret
              //EenEW-s0xVBCaNM4FhpG44hd
            })
            