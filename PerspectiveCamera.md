## 透视相机歪说
```js
PerspectiveCamera( 
    fov : Number,
    aspect : Number,
    near : Number,
    far : Number
    )
```

> 视锥（视体）View Frustum 为了节约计算资源而采用的优化手段，好比眼睛能看到的最近最远距离。即最近视平面和最远视平面所夹构成的秃顶锥形。

- fov — Camera frustum vertical field of view. 视域（焦距）
- aspect — Camera frustum aspect ratio.哈哈镜，一般要与场景canvas宽高比一致
- near — Camera frustum near plane.最近视平面
- far — Camera frustum far plane.最远视平面
