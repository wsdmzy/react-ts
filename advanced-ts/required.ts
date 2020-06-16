// Required  必填 即使可选也无效  
interface RequiredType {
  id: number
  firstName?: string
  lastName?: string
}


function showType5(args: Required<RequiredType>) {
  console.log(args)
}

showType5({id: 1, firstName: 'gg', lastName: 'aa'})