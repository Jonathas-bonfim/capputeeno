export function Navigation() {
  return (
    <section>
      <div className="container-center">
        <aside>
          <a href="/">Todos os produtos</a>
          <a href="/">Camisetas</a>
          <a href="/">Canecas</a>
        </aside>
        <article>
          <select name="Organizar por" id="organize">
            {/* <option value="">Organizar por</option> */}
            <option value="">Novidades</option>
            <option value="">Preço: Maior - menor</option>
            <option value="">Preço: Menor - maior</option>
            <option value="">Mais vendidos</option>
          </select>
        </article>
      </div>
    </section>
  )
}