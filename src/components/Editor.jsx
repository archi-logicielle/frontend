import Editor from "@monaco-editor/react"
import {useRef,useState} from "react"
import {Box,Fab,Grid,Chip, Paper} from "@mui/material"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import axios from 'axios';
import { width } from "@mui/system";


export default function EditorType(props){
   
    const {language,language_id,code,exores}=props
    console.info(language)
    
    const editorRef =useRef(null) 
    const [reponse,setReponse]=useState("");
    const [err,setErr]=useState("");

     const handleEditorMount=(editor,monaco)=>{
        editorRef.current =editor;
    }
    const resexo=window.atob(exores)


    const getEditorValue=  async ()=>{
     //alert(editorRef.current.getValue(),language_id);
      const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/?base64_encoded=false&fields=*',
        headers: {
          'Content-Type': 'application/json',
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'af4b035371msh2996afbaa09fd30p135789jsn0a3c647fecec',
          /* 'X-RapidAPI-Key': '9dc2f20cd1msha8831e2c3f29c40p14db9djsnc8f462468e01', */
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          accept: "application/json"
        },
        data: JSON.stringify({
          source_code: `${editorRef.current.getValue()}`,
          stdin: '',
          language_id: language_id
        }),
      };
      await axios.request(options).then(function (response) {
        console.log(response.data);
        const token=response.data.token
        console.log(token)
        const optionsGet = {
          method: 'GET',
          url: `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`,
          headers: {
            'X-RapidAPI-Key': 'af4b035371msh2996afbaa09fd30p135789jsn0a3c647fecec',
            /* 'X-RapidAPI-Key': '9dc2f20cd1msha8831e2c3f29c40p14db9djsnc8f462468e01', */
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json',
            'content-type': 'application/json',
          },
        }
        axios.request(optionsGet).then(function (response) {
          if (response.data.stdout!=null){
          const output=window.atob(response.data.stdout)
          alert((output))
            setReponse(output)
        }else{
            const errOutput=window.atob(response.data.stderr)
            alert((errOutput))
            setErr(errOutput)
          }
        }).catch(function (error) {
          console.error(error);
        }) 


      }).catch(function (error) {
        console.error(error);
      });
     
    } 
    return(
        <Box sx={{height:'90%',
        marginTop:'0.5rem',
        marginX:"1rem",}}>
            <Editor
                height="85%"
                width="90%"
                theme="vs-dark"
                defaultLanguage={language}
                options={{
                    "acceptSuggestionOnCommitCharacter": true,
                    "acceptSuggestionOnEnter": "on",
                    "accessibilitySupport": "auto",
                    "autoIndent": false,
                    "automaticLayout": true,
                    "codeLens": true,
                    "colorDecorators": true,
                    "contextmenu": true,
                    "cursorBlinking": "blink",
                    "cursorSmoothCaretAnimation": false,
                    "cursorStyle": "line",
                    "disableLayerHinting": false,
                    "disableMonospaceOptimizations": false,
                    "dragAndDrop": false,
                    "fixedOverflowWidgets": false,
                    "folding": true,
                    "foldingStrategy": "auto",
                    "fontLigatures": false,
                    "formatOnPaste": false,
                    "formatOnType": false,
                    "hideCursorInOverviewRuler": false,
                    "highlightActiveIndentGuide": true,
                    "links": true,
                    "mouseWheelZoom": false,
                    "multiCursorMergeOverlapping": true,
                    "multiCursorModifier": "alt",
                    "overviewRulerBorder": true,
                    "overviewRulerLanes": 2,
                    "quickSuggestions": true,
                    "quickSuggestionsDelay": 100,
                    "readOnly": false,
                    "renderControlCharacters": false,
                    "renderFinalNewline": true,
                    "renderIndentGuides": true,
                    "renderLineHighlight": "all",
                    "renderWhitespace": "none",
                    "revealHorizontalRightPadding": 30,
                    "roundedSelection": true,
                    "rulers": [],
                    "scrollBeyondLastColumn": 5,
                    "scrollBeyondLastLine": true,
                    "selectOnLineNumbers": true,
                    "selectionClipboard": true,
                    "selectionHighlight": true,
                    "showFoldingControls": "mouseover",
                    "smoothScrolling": false,
                    "suggestOnTriggerCharacters": true,
                    "wordBasedSuggestions": true,
                    "wordWrapColumn": 80,
                    "wordWrapMinified": true,
                    "wrappingIndent": "none"
                  }}
                 onMount={handleEditorMount}
                 value={code}
            />
           
           <Fab onClick={getEditorValue} variant="extended"  sx={{
            marginTop:"1rem"
            
           }}>
                <PlayCircleFilledWhiteOutlinedIcon sx={{ mr: 1 }} />
                Run
            </Fab>
            <Grid item sx = {{ height: '35vh'}}>
              {err  && <Paper sx={{mt:2}} elevation={0}>
                  <Box  sx={{
                    backgroundColor:"#c91c1c4d",
                    width:"50%",
                    wordWrap: 'break-word',
                    overflowY: "scroll"
                    }}>
                    {err}
                  </Box> 
                </Paper>
              }
              {reponse && <Paper sx={{mt:2}} elevation={0}>
                
                  {reponse===resexo ? <Chip  icon={<DoneOutlineIcon />} label="Success" color="success" variant="outlined" /> : <Chip  icon={<CloseIcon />} label="Wrong" color="warning" variant="outlined" />}
                  <Box mt={2} sx={
                    {
                      width:"100%",
                      wordWrap: 'break-word',
                      overflowY: "scroll"
                    }
                    }>
                    Reponse attendue <br/>
                    {resexo}
                    <br/>Reponse reçue <br/>
                    <span>{reponse}</span>
                  </Box>

                   </Paper>  }
              </Grid>
            
      </Box>
    )
}