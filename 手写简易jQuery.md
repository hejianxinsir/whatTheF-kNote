
```
window.jQuery = function(nodeOrSelector){
  let nodes = {} //伪数组
  // 首先接受一个参数，判断是字符串还是节点。如果是字符串，那就放到伪数组里面，如果是节点，也放入伪数组，这两者要保持一致，要都是伪数组。
  if(typeof nodeOrSelector === 'string'){
    let temp = document.querySelectorAll(nodeOrSelector)
    for(let i=0; i<temp.length; i++){
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if(nodeOrSelector instanceof Node){
    nodes={
      0: nodeOrSelector,
      length: 1
    }
  }
  
  // 添加class。addClass 的时候，会遍历所有节点并都添加新的class。
  nodes.addClass = function(classes){
    classes.forEach((value)=>{
      for(let i=0; i<nodes.length; i++){
        nodes[i].classList.add(value)
      }
    })
  }
  
  //更换文字。setText 的时候，会遍历所有节点的文本，并设置好新文字。
  nodes.setText = function(text){
    for(let i=0; i<nodes.length; i++){
      nodes[i].textContent = text
    }
  }
  
  return nodes
  
}

var node2 = jQuery('div')
node2.addClass(['red'])
node2.setText('hello')
```

另一个有 getText 的

```
window.jQuery = function(nodeOrSelector){
  let nodes = {} //伪数组
  // 首先接受一个参数，判断是字符串还是节点。如果是字符串，那就放到伪数组里面，如果是节点，也放入伪数组，这两者要保持一致，要都是伪数组。
  if(typeof nodeOrSelector === 'string'){
    let temp = document.querySelectorAll(nodeOrSelector)
    for(let i=0; i<temp.length; i++){
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if(nodeOrSelector instanceof Node){
    nodes={
      0: nodeOrSelector,
      length: 1
    }
  }
  
  // 添加class。addClass 的时候，会遍历所有节点并都添加新的class。
  nodes.addClass = function(classes){
    classes.forEach((value)=>{
      for(let i=0; i<nodes.length; i++){
        nodes[i].classList.add(value)
      }
    })
  }
  
  //更换文字。setText 的时候，会遍历所有节点的文本，并设置好新文字。
  nodes.setText = function(text){
    for(let i=0; i<nodes.length; i++){
      nodes[i].textContent = text
    }
  }
  
  // 获取文本
  nodes.getText = function(){
    let write = []
    for(let i=0; i<nodes.length; i++){
      write.push( nodes[i].textContent )
    }
    return write
  }
  
  return nodes
  
}

var node2 = jQuery('div')
console.log( node2.getText() )
node2.addClass(['red'])
node2.setText('hello')
```