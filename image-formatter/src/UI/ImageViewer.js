// import { IconFolder, IconFile, IconFolderOpen } from './Icons'

export const ImageViewer = ({ image }) => (
  <div class="viewer">
    <div class="left-side">
      <div class="name-box">
        <div>
          <label>Title</label> <br/>
          <input type="text" class="user-input"/>
        </div>
        <div>
          <label>Alt Text</label> <br/>
          <input type="text" class="user-input"/>
        </div>
      </div>
      <label>Description</label> <br/>
      <textarea id="description" name="description" rows="10" cols="44" wrap="hard" class="user-input"></textarea>
    </div>
    <div class="right-side">
      <div class="image-holder">
        
      </div>
    </div>
  </div>
)