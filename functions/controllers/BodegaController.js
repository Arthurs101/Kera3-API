const db = require('../database/supabase');

let { data: producto, error } = await supabase
  .from('producto')
  .select('codigo_producto')
