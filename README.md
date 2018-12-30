# Ionic-v3-upload
Upload provider for ionic v3

## Start ##
Você precisa instalar o plugin FileTranfer e File no seu projeto, após isso importe o provider na page que você irá usá-lo.


**Call :**

```typescript
      this.uploadProvider.upload(file, params, loader).then(result=>{
        console.log(result);
      }).catch(reason=>{
        console.warn('Failed!', reason);
      });
```

**Paramêtros do método upload(): :**
- File: O seu arquivo que foi pego da câmera ou galeria.
- Params: Um objeto de parâmetros para enviar para o upload.
- Loader: Boolean true ou false para criar um loader progress em quanto faz o upload!
