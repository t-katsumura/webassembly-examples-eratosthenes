(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $none_=>_i32 (func (result i32)))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 18084))
 (memory $0 1)
 (data (i32.const 1036) ",")
 (data (i32.const 1048) "\01\00\00\00\0e\00\00\00a\00b\00o\00r\00t\00e\00d")
 (data (i32.const 1084) "<")
 (data (i32.const 1096) "\01\00\00\00\"\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00p\00r\00i\00m\00e\00.\00t\00s")
 (data (i32.const 1148) ",")
 (data (i32.const 1160) "\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1196) "<")
 (data (i32.const 1208) "\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1260) "<")
 (data (i32.const 1272) "\01\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1324) "<")
 (data (i32.const 1336) "\01\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data (i32.const 1452) "<")
 (data (i32.const 1464) "\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1516) ",")
 (data (i32.const 1528) "\01\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data (i32.const 1596) "<")
 (data (i32.const 1608) "\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1664) "\04\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 1692) "d")
 (export "prime" (func $assembly/prime/prime))
 (export "abort" (func $assembly/prime/abort))
 (export "memory" (memory $0))
 (start $~start)
 (func $assembly/prime/abort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  i32.const 1472
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1168
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1280
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load $0 offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load $0 offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 1056
     i32.const 1104
     i32.const 64
     i32.const 5
     call $assembly/prime/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load $0 offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  block $folding-inner0
   local.get $0
   i32.load $0 offset=4
   i32.const -4
   i32.and
   local.tee $1
   i32.eqz
   if
    local.get $0
    i32.load $0 offset=8
    i32.eqz
    local.get $0
    i32.const 18084
    i32.lt_u
    i32.and
    i32.eqz
    br_if $folding-inner0
    return
   end
   local.get $0
   i32.load $0 offset=8
   local.tee $0
   i32.eqz
   br_if $folding-inner0
   local.get $1
   local.get $0
   i32.store $0 offset=8
   local.get $0
   local.get $1
   local.get $0
   i32.load $0 offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store $0 offset=4
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/__typeinfo (param $0 i32) (result i32)
  local.get $0
  i32.const 1664
  i32.load $0
  i32.gt_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  local.get $0
  i32.const 3
  i32.shl
  i32.const 1668
  i32.add
  i32.load $0
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load $0 offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 1056
    i32.const 1104
    i32.const 64
    i32.const 5
    call $assembly/prime/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $2
  local.get $0
  i32.load $0 offset=12
  local.tee $1
  i32.const 1
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $1
   call $~lib/rt/__typeinfo
   i32.const 32
   i32.and
   i32.const 0
   i32.ne
  end
  local.set $1
  local.get $2
  i32.load $0 offset=8
  local.set $3
  local.get $0
  global.get $~lib/rt/itcms/white
  i32.eqz
  i32.const 2
  local.get $1
  select
  local.get $2
  i32.or
  i32.store $0 offset=4
  local.get $0
  local.get $3
  i32.store $0 offset=8
  local.get $3
  local.get $0
  local.get $3
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store $0 offset=4
  local.get $2
  local.get $0
  i32.store $0 offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $folding-inner0
   local.get $1
   i32.load $0
   local.tee $2
   i32.const 1
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $2
   i32.const -4
   i32.and
   local.tee $2
   i32.const 12
   i32.lt_u
   br_if $folding-inner0
   local.get $2
   i32.const 256
   i32.lt_u
   if (result i32)
    local.get $2
    i32.const 4
    i32.shr_u
   else
    i32.const 31
    local.get $2
    i32.const 1073741820
    local.get $2
    i32.const 1073741820
    i32.lt_u
    select
    local.tee $2
    i32.clz
    i32.sub
    local.tee $4
    i32.const 7
    i32.sub
    local.set $3
    local.get $2
    local.get $4
    i32.const 4
    i32.sub
    i32.shr_u
    i32.const 16
    i32.xor
   end
   local.tee $2
   i32.const 16
   i32.lt_u
   local.get $3
   i32.const 23
   i32.lt_u
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $1
   i32.load $0 offset=8
   local.set $5
   local.get $1
   i32.load $0 offset=4
   local.tee $4
   if
    local.get $4
    local.get $5
    i32.store $0 offset=8
   end
   local.get $5
   if
    local.get $5
    local.get $4
    i32.store $0 offset=4
   end
   local.get $1
   local.get $0
   local.get $3
   i32.const 4
   i32.shl
   local.get $2
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load $0 offset=96
   i32.eq
   if
    local.get $0
    local.get $3
    i32.const 4
    i32.shl
    local.get $2
    i32.add
    i32.const 2
    i32.shl
    i32.add
    local.get $5
    i32.store $0 offset=96
    local.get $5
    i32.eqz
    if
     local.get $0
     local.get $3
     i32.const 2
     i32.shl
     i32.add
     local.tee $1
     i32.load $0 offset=4
     i32.const -2
     local.get $2
     i32.rotl
     i32.and
     local.set $2
     local.get $1
     local.get $2
     i32.store $0 offset=4
     local.get $2
     i32.eqz
     if
      local.get $0
      local.get $0
      i32.load $0
      i32.const -2
      local.get $3
      i32.rotl
      i32.and
      i32.store $0
     end
    end
   end
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  block $folding-inner0
   local.get $1
   i32.eqz
   br_if $folding-inner0
   local.get $1
   i32.load $0
   local.tee $3
   i32.const 1
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load $0
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load $0
   local.tee $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    i32.const 4
    i32.add
    local.get $2
    i32.const -4
    i32.and
    i32.add
    local.tee $3
    i32.store $0
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load $0
    i32.const -4
    i32.and
    i32.add
    local.tee $4
    i32.load $0
    local.set $2
   end
   local.get $3
   i32.const 2
   i32.and
   if
    local.get $1
    i32.const 4
    i32.sub
    i32.load $0
    local.tee $1
    i32.load $0
    local.tee $6
    i32.const 1
    i32.and
    i32.eqz
    br_if $folding-inner0
    local.get $0
    local.get $1
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $6
    i32.const 4
    i32.add
    local.get $3
    i32.const -4
    i32.and
    i32.add
    local.tee $3
    i32.store $0
   end
   local.get $4
   local.get $2
   i32.const 2
   i32.or
   i32.store $0
   local.get $3
   i32.const -4
   i32.and
   local.tee $2
   i32.const 12
   i32.lt_u
   br_if $folding-inner0
   local.get $4
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   i32.ne
   br_if $folding-inner0
   local.get $4
   i32.const 4
   i32.sub
   local.get $1
   i32.store $0
   local.get $2
   i32.const 256
   i32.lt_u
   if (result i32)
    local.get $2
    i32.const 4
    i32.shr_u
   else
    i32.const 31
    local.get $2
    i32.const 1073741820
    local.get $2
    i32.const 1073741820
    i32.lt_u
    select
    local.tee $2
    i32.clz
    i32.sub
    local.tee $3
    i32.const 7
    i32.sub
    local.set $5
    local.get $2
    local.get $3
    i32.const 4
    i32.sub
    i32.shr_u
    i32.const 16
    i32.xor
   end
   local.tee $2
   i32.const 16
   i32.lt_u
   local.get $5
   i32.const 23
   i32.lt_u
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $0
   local.get $5
   i32.const 4
   i32.shl
   local.get $2
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load $0 offset=96
   local.set $3
   local.get $1
   i32.const 0
   i32.store $0 offset=4
   local.get $1
   local.get $3
   i32.store $0 offset=8
   local.get $3
   if
    local.get $3
    local.get $1
    i32.store $0 offset=4
   end
   local.get $0
   local.get $5
   i32.const 4
   i32.shl
   local.get $2
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $1
   i32.store $0 offset=96
   local.get $0
   local.get $0
   i32.load $0
   i32.const 1
   local.get $5
   i32.shl
   i32.or
   i32.store $0
   local.get $0
   local.get $5
   i32.const 2
   i32.shl
   i32.add
   local.tee $0
   local.get $0
   i32.load $0 offset=4
   i32.const 1
   local.get $2
   i32.shl
   i32.or
   i32.store $0 offset=4
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $folding-inner0
   local.get $1
   local.get $2
   i32.gt_u
   br_if $folding-inner0
   local.get $1
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
   local.set $1
   local.get $0
   i32.load $0 offset=1568
   local.tee $3
   if
    local.get $3
    i32.const 4
    i32.add
    local.get $1
    i32.gt_u
    br_if $folding-inner0
    local.get $1
    i32.const 16
    i32.sub
    local.get $3
    i32.eq
    if
     local.get $3
     i32.load $0
     local.set $4
     local.get $1
     i32.const 16
     i32.sub
     local.set $1
    end
   else
    local.get $0
    i32.const 1572
    i32.add
    local.get $1
    i32.gt_u
    br_if $folding-inner0
   end
   local.get $2
   i32.const -16
   i32.and
   local.get $1
   i32.sub
   local.tee $2
   i32.const 20
   i32.lt_u
   if
    return
   end
   local.get $1
   local.get $4
   i32.const 2
   i32.and
   local.get $2
   i32.const 8
   i32.sub
   local.tee $2
   i32.const 1
   i32.or
   i32.or
   i32.store $0
   local.get $1
   i32.const 0
   i32.store $0 offset=4
   local.get $1
   i32.const 0
   i32.store $0 offset=8
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.tee $2
   i32.const 2
   i32.store $0
   local.get $0
   local.get $2
   i32.store $0 offset=1568
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size $0
  local.tee $1
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $1
   i32.sub
   memory.grow $0
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 18096
  i32.const 0
  i32.store $0
  i32.const 19664
  i32.const 0
  i32.store $0
  loop $for-loop|0
   local.get $0
   i32.const 23
   i32.lt_u
   if
    local.get $0
    i32.const 2
    i32.shl
    i32.const 18096
    i32.add
    i32.const 0
    i32.store $0 offset=4
    i32.const 0
    local.set $1
    loop $for-loop|1
     local.get $1
     i32.const 16
     i32.lt_u
     if
      local.get $0
      i32.const 4
      i32.shl
      local.get $1
      i32.add
      i32.const 2
      i32.shl
      i32.const 18096
      i32.add
      i32.const 0
      i32.store $0 offset=96
      local.get $1
      i32.const 1
      i32.add
      local.set $1
      br $for-loop|1
     end
    end
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  i32.const 18096
  i32.const 19668
  memory.size $0
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 18096
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.const 1
  local.get $0
  select
  if (result i32)
   i32.const 1
  else
   local.get $1
   i32.load $0
   i32.const 1
   i32.and
  end
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      br_table $case0|0 $case1|0 $case2|0 $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $2
    global.get $~lib/rt/itcms/iter
    i32.load $0 offset=4
    i32.const -4
    i32.and
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $2
      local.get $0
      i32.load $0 offset=4
      i32.const 3
      i32.and
      i32.ne
      if
       local.get $0
       local.get $0
       i32.load $0 offset=4
       i32.const -4
       i32.and
       local.get $2
       i32.or
       i32.store $0 offset=4
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       return
      end
      local.get $0
      i32.load $0 offset=4
      i32.const -4
      i32.and
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/iter
    i32.load $0 offset=4
    i32.const -4
    i32.and
    i32.eq
    if
     global.get $~lib/memory/__stack_pointer
     local.set $0
     loop $while-continue|0
      local.get $0
      i32.const 18084
      i32.lt_u
      if
       local.get $0
       i32.load $0
       local.tee $1
       if
        local.get $1
        call $byn-split-outlined-A$~lib/rt/itcms/__visit
       end
       local.get $0
       i32.const 4
       i32.add
       local.set $0
       br $while-continue|0
      end
     end
     global.get $~lib/rt/itcms/iter
     i32.load $0 offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $2
       local.get $0
       i32.load $0 offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $0
        i32.load $0 offset=4
        i32.const -4
        i32.and
        local.get $2
        i32.or
        i32.store $0 offset=4
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
       end
       local.get $0
       i32.load $0 offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $0
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $0
     global.set $~lib/rt/itcms/toSpace
     local.get $2
     global.set $~lib/rt/itcms/white
     local.get $0
     i32.load $0 offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    return
   end
   global.get $~lib/rt/itcms/iter
   local.tee $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    i32.load $0 offset=4
    local.tee $1
    i32.const -4
    i32.and
    global.set $~lib/rt/itcms/iter
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.get $1
    i32.const 3
    i32.and
    i32.ne
    if
     i32.const 1056
     i32.const 1104
     i32.const 64
     i32.const 5
     call $assembly/prime/abort
     unreachable
    end
    local.get $0
    i32.const 18084
    i32.lt_u
    if
     local.get $0
     i32.const 0
     i32.store $0 offset=4
     local.get $0
     i32.const 0
     i32.store $0 offset=8
    else
     global.get $~lib/rt/itcms/total
     local.get $0
     i32.load $0
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/itcms/total
     local.get $0
     i32.const 4
     i32.add
     local.tee $0
     i32.const 18084
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      global.get $~lib/rt/tlsf/ROOT
      local.set $1
      local.get $0
      call $~lib/rt/tlsf/checkUsedBlock
      local.tee $0
      local.get $0
      i32.load $0
      i32.const 1
      i32.or
      i32.store $0
      local.get $1
      local.get $0
      call $~lib/rt/tlsf/insertBlock
     end
    end
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   local.tee $0
   local.get $0
   i32.store $0 offset=4
   local.get $0
   local.get $0
   i32.store $0 offset=8
   i32.const 0
   global.set $~lib/rt/itcms/state
  end
  i32.const 0
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  i32.const 12
  local.get $0
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $0
  i32.const 12
  i32.le_u
  select
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner0
   local.get $1
   i32.const 256
   i32.lt_u
   if (result i32)
    local.get $1
    i32.const 4
    i32.shr_u
   else
    i32.const 31
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.get $1
    local.get $1
    i32.const 536870910
    i32.lt_u
    select
    local.tee $1
    i32.clz
    i32.sub
    local.tee $3
    i32.const 7
    i32.sub
    local.set $2
    local.get $1
    local.get $3
    i32.const 4
    i32.sub
    i32.shr_u
    i32.const 16
    i32.xor
   end
   local.tee $1
   i32.const 16
   i32.lt_u
   local.get $2
   i32.const 23
   i32.lt_u
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $0
   local.get $2
   i32.const 2
   i32.shl
   i32.add
   i32.load $0 offset=4
   i32.const -1
   local.get $1
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.get $2
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load $0 offset=96
   else
    local.get $0
    i32.load $0
    i32.const -1
    local.get $2
    i32.const 1
    i32.add
    i32.shl
    i32.and
    local.tee $1
    if (result i32)
     local.get $0
     local.get $1
     i32.ctz
     local.tee $1
     i32.const 2
     i32.shl
     i32.add
     i32.load $0 offset=4
     local.tee $2
     i32.eqz
     br_if $folding-inner0
     local.get $0
     local.get $2
     i32.ctz
     local.get $1
     i32.const 4
     i32.shl
     i32.add
     i32.const 2
     i32.shl
     i32.add
     i32.load $0 offset=96
    else
     i32.const 0
    end
   end
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load $0
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store $0
   local.get $1
   i32.const 4
   i32.add
   local.get $2
   i32.add
   local.tee $1
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store $0
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store $0
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load $0
   i32.const -4
   i32.and
   i32.add
   local.tee $0
   local.get $0
   i32.load $0
   i32.const -3
   i32.and
   i32.store $0
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner0
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/prepareSize
   local.tee $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    memory.size $0
    local.tee $3
    i32.const 4
    local.get $0
    i32.load $0 offset=1568
    local.get $3
    i32.const 16
    i32.shl
    i32.const 4
    i32.sub
    i32.ne
    i32.shl
    local.get $2
    i32.const 1
    i32.const 27
    local.get $2
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    i32.add
    local.get $2
    local.get $2
    i32.const 536870910
    i32.lt_u
    select
    i32.add
    i32.const 65535
    i32.add
    i32.const -65536
    i32.and
    i32.const 16
    i32.shr_u
    local.tee $1
    local.get $1
    local.get $3
    i32.lt_s
    select
    memory.grow $0
    i32.const 0
    i32.lt_s
    if
     local.get $1
     memory.grow $0
     i32.const 0
     i32.lt_s
     if
      unreachable
     end
    end
    local.get $0
    local.get $3
    i32.const 16
    i32.shl
    memory.size $0
    i32.const 16
    i32.shl
    call $~lib/rt/tlsf/addMemory
    local.get $0
    local.get $2
    call $~lib/rt/tlsf/searchBlock
    local.tee $1
    i32.eqz
    br_if $folding-inner0
   end
   local.get $2
   local.get $1
   i32.load $0
   i32.const -4
   i32.and
   i32.gt_u
   br_if $folding-inner0
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $0
   local.get $1
   local.get $2
   call $~lib/rt/tlsf/prepareBlock
   local.get $1
   return
  end
  i32.const 1056
  i32.const 1104
  i32.const 64
  i32.const 5
  call $assembly/prime/abort
  unreachable
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $2
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   local.get $1
   i32.store8 $0
   local.get $0
   local.get $2
   i32.add
   local.tee $4
   i32.const 1
   i32.sub
   local.get $1
   i32.store8 $0
   local.get $2
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   local.get $1
   i32.store8 $0 offset=1
   local.get $0
   local.get $1
   i32.store8 $0 offset=2
   local.get $4
   i32.const 2
   i32.sub
   local.get $1
   i32.store8 $0
   local.get $4
   i32.const 3
   i32.sub
   local.get $1
   i32.store8 $0
   local.get $2
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   local.get $1
   i32.store8 $0 offset=3
   local.get $4
   i32.const 4
   i32.sub
   local.get $1
   i32.store8 $0
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $4
   local.get $0
   i32.add
   local.tee $5
   local.get $1
   i32.const 255
   i32.and
   i32.const 16843009
   i32.mul
   local.tee $0
   i32.store $0
   local.get $2
   local.get $4
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   local.get $5
   i32.add
   local.tee $1
   i32.const 4
   i32.sub
   local.get $0
   i32.store $0
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $5
   local.get $0
   i32.store $0 offset=4
   local.get $5
   local.get $0
   i32.store $0 offset=8
   local.get $1
   i32.const 12
   i32.sub
   local.get $0
   i32.store $0
   local.get $1
   i32.const 8
   i32.sub
   local.get $0
   i32.store $0
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $5
   local.get $0
   i32.store $0 offset=12
   local.get $5
   local.get $0
   i32.store $0 offset=16
   local.get $5
   local.get $0
   i32.store $0 offset=20
   local.get $5
   local.get $0
   i32.store $0 offset=24
   local.get $1
   i32.const 28
   i32.sub
   local.get $0
   i32.store $0
   local.get $1
   i32.const 24
   i32.sub
   local.get $0
   i32.store $0
   local.get $1
   i32.const 20
   i32.sub
   local.get $0
   i32.store $0
   local.get $1
   i32.const 16
   i32.sub
   local.get $0
   i32.store $0
   local.get $5
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $4
   local.get $5
   i32.add
   local.set $1
   local.get $2
   local.get $4
   i32.sub
   local.set $2
   local.get $0
   i64.extend_i32_u
   local.tee $3
   i64.const 32
   i64.shl
   local.get $3
   i64.or
   local.set $3
   loop $while-continue|0
    local.get $2
    i32.const 32
    i32.ge_u
    if
     local.get $1
     local.get $3
     i64.store $0
     local.get $1
     local.get $3
     i64.store $0 offset=8
     local.get $1
     local.get $3
     i64.store $0 offset=16
     local.get $1
     local.get $3
     i64.store $0 offset=24
     local.get $2
     i32.const 32
     i32.sub
     local.set $2
     local.get $1
     i32.const 32
     i32.add
     local.set $1
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $1
    loop $do-loop|0
     local.get $1
     call $~lib/rt/itcms/step
     i32.sub
     local.set $1
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $1
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $1
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    local.get $1
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $0
  i32.const 16
  i32.add
  call $~lib/rt/tlsf/allocateBlock
  local.tee $3
  i32.const 3
  i32.store $0 offset=12
  local.get $3
  local.get $0
  i32.store $0 offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $2
  i32.load $0 offset=8
  local.set $1
  local.get $3
  local.get $2
  global.get $~lib/rt/itcms/white
  i32.or
  i32.store $0 offset=4
  local.get $3
  local.get $1
  i32.store $0 offset=8
  local.get $1
  local.get $3
  local.get $1
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store $0 offset=4
  local.get $2
  local.get $3
  i32.store $0 offset=8
  global.get $~lib/rt/itcms/total
  local.get $3
  i32.load $0
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $3
  i32.const 20
  i32.add
  local.tee $1
  i32.const 0
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/staticarray/StaticArray<bool>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load $0 offset=16
  i32.ge_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.add
  i32.load8_u $0
 )
 (func $~lib/staticarray/StaticArray<bool>#__set (param $0 i32) (param $1 i32)
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load $0 offset=16
  i32.ge_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.add
  i32.const 0
  i32.store8 $0
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  block $invalid
   block $~lib/staticarray/StaticArray<bool>
    block $~lib/arraybuffer/ArrayBufferView
     block $~lib/string/String
      block $~lib/arraybuffer/ArrayBuffer
       local.get $0
       i32.const 8
       i32.sub
       i32.load $0
       br_table $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $~lib/staticarray/StaticArray<bool> $invalid
      end
      return
     end
     return
    end
    local.get $0
    i32.load $0
    local.tee $0
    if
     local.get $0
     call $byn-split-outlined-A$~lib/rt/itcms/__visit
    end
    return
   end
   return
  end
  unreachable
 )
 (func $~start
  memory.size $0
  i32.const 16
  i32.shl
  i32.const 18084
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1396
  i32.const 1392
  i32.store $0
  i32.const 1400
  i32.const 1392
  i32.store $0
  i32.const 1392
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1428
  i32.const 1424
  i32.store $0
  i32.const 1432
  i32.const 1424
  i32.store $0
  i32.const 1424
  global.set $~lib/rt/itcms/toSpace
  i32.const 1572
  i32.const 1568
  i32.store $0
  i32.const 1576
  i32.const 1568
  i32.store $0
  i32.const 1568
  global.set $~lib/rt/itcms/fromSpace
 )
 (func $~stack_check
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 1700
  i32.lt_s
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
 )
 (func $~lib/staticarray/StaticArray<bool>#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1056
   i32.const 1104
   i32.const 64
   i32.const 5
   call $assembly/prime/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/prime/prime (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  local.get $0
  i32.const 2
  i32.eq
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 2
   return
  else
   local.get $0
   i32.const 2
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 0
    return
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 1
  i32.sub
  i32.const 2
  i32.div_s
  f32.convert_i32_s
  i32.trunc_sat_f32_s
  local.tee $3
  call $~lib/staticarray/StaticArray<bool>#constructor
  local.tee $2
  i32.store $0
  i32.const 0
  local.get $2
  i32.const 20
  i32.sub
  i32.load $0 offset=16
  local.tee $1
  local.get $1
  i32.const 0
  i32.gt_s
  select
  local.tee $4
  local.get $1
  i32.lt_s
  if
   local.get $2
   local.get $4
   i32.add
   i32.const 1
   local.get $1
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
  end
  local.get $0
  f32.convert_i32_s
  f32.sqrt
  f32.floor
  i32.trunc_sat_f32_s
  local.set $5
  i32.const 0
  local.set $0
  loop $for-loop|0
   local.get $0
   local.get $3
   i32.lt_s
   if
    local.get $5
    local.get $0
    i32.const 1
    i32.shl
    i32.const 3
    i32.add
    local.tee $4
    i32.ge_s
    if
     local.get $0
     i32.const 1
     i32.add
     local.set $1
     loop $for-loop|1
      local.get $1
      local.get $3
      i32.lt_s
      if
       local.get $2
       local.get $1
       call $~lib/staticarray/StaticArray<bool>#__get
       if
        local.get $1
        i32.const 1
        i32.shl
        i32.const 3
        i32.add
        local.get $4
        i32.rem_s
        i32.eqz
        if
         local.get $2
         local.get $1
         call $~lib/staticarray/StaticArray<bool>#__set
        end
       end
       local.get $1
       i32.const 1
       i32.add
       local.set $1
       br $for-loop|1
      end
     end
     local.get $0
     i32.const 1
     i32.add
     local.set $0
     br $for-loop|0
    end
   end
  end
  i32.const 2
  local.set $0
  local.get $3
  i32.const 1
  i32.sub
  local.set $1
  loop $for-loop|2
   local.get $1
   i32.const 0
   i32.ge_s
   if
    block $for-break2
     local.get $2
     local.get $1
     call $~lib/staticarray/StaticArray<bool>#__get
     if
      local.get $1
      i32.const 1
      i32.shl
      i32.const 3
      i32.add
      local.set $0
      br $for-break2
     end
     local.get $1
     i32.const 1
     i32.sub
     local.set $1
     br $for-loop|2
    end
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__visit (param $0 i32)
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
)