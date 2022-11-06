<template>
  <div id="view-container" class="w-full h-full bg-mid-black rounded-xl overflow-hidden">
    <div id="title-container" class="sticky top-0 w-full flex items-center justify-between p-4 bg-mid-black z-20">
      <h1 class="text-full-white text-3xl font-semibold">Tarefas</h1>

      <div id="buttons-container" class="flex items-center justify-center">
        <div class="relative">
          <button id="menu-button"
            @click="showButtonsContainerDialog = !showButtonsContainerDialog"
            class="flex md:hidden items-center justify-center bg-low-white hover:bg-primary-dark transition-colors rounded w-full whitespace-nowrap p-2"
          >
            <svg class="w-6 h-6 text-full-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div v-if="showButtonsContainerDialog"
            class="absolute -left-32 top-12 w-44 bg-mid-black p-4 border border-low-white shadow-lg rounded"
          >
            <ul>
              <li @click="showButtonsContainerDialog = false, openNewDialog()"
                class="flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-full-white mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span class="text-full-white">Novo item</span>
              </li>

              <li v-if="selected.length === 1"
                @click="showButtonsContainerDialog = false, openEditDialog()"
                class="flex items-center mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-full-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <span class="text-full-white">Editar seleção</span>
              </li>

              <li v-if="selected.length"
                @click="showButtonsContainerDialog = false, openDeleteDialog()"
                class="flex items-center mt-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-full-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span class="text-full-white">Deletar seleção</span>
              </li>
            </ul>
          </div>
        </div>

        <button v-if="selected.length === 1"
          @click="openEditDialog()"
          class="hidden md:flex items-center justify-center bg-primary hover:bg-primary-dark transition-colors rounded w-full whitespace-nowrap p-2 mr-4"
        >
          <span class="text-full-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-full-white hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </span>
          <span class="text-full-white">Editar seleção</span>
        </button>

        <button v-if="selected.length"
          @click="openDeleteDialog()"
          class="hidden md:flex items-center justify-center bg-primary hover:bg-primary-dark transition-colors rounded w-full whitespace-nowrap p-2 mr-4"
        >
          <span class="text-full-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-full-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
          </span>
          <span class="text-full-white">Deletar seleção</span>
        </button>

        <!-- TODO -->
        <!-- <button class="hidden md:flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded w-full whitespace-nowrap p-2 mr-4">
          <span class="text-full-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </span>
          <span class="text-full-white">Atualizar</span>
        </button> -->

        <button 
          @click="openNewDialog()"
          class="hidden md:flex items-center justify-center bg-low-white hover:bg-primary transition-colors w-full rounded whitespace-nowrap p-2 mr-4"
        >
          <span class="text-full-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
          <span class="text-full-white">Novo item</span>
        </button>

        <!-- TODO -->
        <!-- <button class="hidden md:flex items-center justify-center bg-low-white hover:bg-primary transition-colors w-full rounded whitespace-nowrap p-2">
          <span class="text-full-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
          <span class="text-full-white">Fechar</span>
        </button> -->
      </div>
    </div>

    <table class="block px-4 pr-0 bg-mid-black w-full overflow-scroll" style="height: 90% !important;">
      <thead class="bg-mid-black z-20">
        <tr>
          <th class="text-mid-white px-6 py-4 whitespace-nowrap rounded-l-2xl">
            <input id="header-checkbox"
              @click="selectAllItems()"
              type="checkbox"
              value=""
              class="h-4 w-4 border border-gray-300 rounded-sm text-low-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer shadow"
              :checked="items.length && selected.length === items.length"
            >
          </th>
          <th 
            v-for="(header, index) in tableHeaders"
            :key="index"
            class="text-full-white text-start px-6 py-4 whitespace-nowrap"
            :class="{'w-full px-0 py-0 md:px-6 md:py-4': header === 'actions'}"
          >
            <span :class="{'invisible': header === 'actions'}">{{ header }}</span>
          </th>
        </tr>
      </thead>

      <tbody class="z-10 w-full h-full">
        <tr v-if="!items.length"
          class="w-full"
        >
          <td :colspan="tableHeaders.length + 1"
            class="text-mid-white px-6 py-4 whitespace-nowrap rounded-l-2xl"
          >
            <span>Esta tabela ainda não possui itens cadastrados</span>
          </td>
        </tr>

        <tr v-else
          v-for="(item, index) in items" :key="index"
          class="hover:bg-full-black group w-full"
        >
          <td class="text-mid-white px-6 py-4 whitespace-nowrap rounded-l-2xl">
            <input id="item-checkbox"
              @click="selectItem(item)"
              type="checkbox"
              value=""
              class="h-4 w-4 border border-gray-300 rounded-sm bg-low-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              :checked="!!selected.find(i => i === item.id)"
            >
          </td>
          <td class="text-mid-white px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
          <td class="text-mid-white px-6 py-4 whitespace-nowrap">{{ item.description }}</td>
          <td class="hidden md:flex md:justify-end w-full px-6 py-4 rounded-r-2xl sticky right-0">
            <button @click="openEditDialog(item)"
              class="px-2 mr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-full-white hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>

            <button @click="openDeleteDialog(item)"
              class="px-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-full-white hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="overlay" v-if="showOverlay" class="bg-full-black absolute top-0 right-0 bottom-0 left-0 z-40 opacity-60"></div>

    <div id="new-dialog" v-if="showNewDialog" class="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center overflow-hidden">
      <div class="bg-mid-black w-10/12 md:w-1/2 rounded-xl flex flex-col justify-between p-4">
        <h1 class="text-white text-xl mb-4">Novo item</h1>
        
        <label for="description" class="text-mid-white mb-2">Descrição</label>
        <input type="text" name="description"
          v-model="newItemDescription"
          class="bg-mid-black border-b-mid-white border-b mb-8 focus:outline-none focus:border-b-primary text-full-white transition-colors"
        >

        <div class="flex justify-end">
          <button @click="closeNewDialog()"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2 mr-4"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <span class="text-full-white hidden md:block">Cancelar</span>
          </button>

          <button @click="confirmNewDialog()"
            :disabled="!newItemDescription"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2 disabled:bg-full-black disabled:opacity-50"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

            </span>
            <span class="text-full-white hidden md:block">Confirmar</span>
          </button>
        </div>
      </div>
    </div>

    <div id="edit-dialog" v-if="showEditDialog" class="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center overflow-hidden">
      <div class="bg-mid-black w-10/12 md:w-1/2 rounded-xl flex flex-col justify-between p-4">
        <h1 class="text-white text-xl mb-4">Editar item</h1>
        
        <label for="description" class="text-mid-white mb-2">Descrição</label>
        <input type="text" name="description"
          v-model="editItemDescription"
          class="bg-mid-black border-b-mid-white border-b mb-8 focus:outline-none focus:border-b-primary text-full-white transition-colors"
        >

        <div class="flex justify-end">
          <button @click="closeEditDialog()"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2 mr-4"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <span class="text-full-white hidden md:block">Cancelar</span>
          </button>

          <button @click="confirmEditDialog()"
            :disabled="!editItemDescription"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2 disabled:bg-full-black disabled:opacity-50"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

            </span>
            <span class="text-full-white hidden md:block">Confirmar</span>
          </button>
        </div>
      </div>
    </div>

    <div id="delete-dialog" v-if="showDeleteDialog" class="absolute top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center overflow-hidden">
      <div class="bg-mid-black w-10/12 md:w-1/2 rounded-xl flex flex-col justify-between p-4">
        <h1 class="text-white text-xl mb-4">{{ `Deletar ${!clickedItem && selected.length > 1 ? 'itens selecionados' : 'item selecionado'}?`}}</h1>
        
        <div v-if="clickedItem" class="text-white text-sm mb-8 overflow-hidden">
          <pre>{{ JSON.stringify(clickedItem, null, 2) }}</pre>
        </div>

        <div v-else class="text-white text-sm mb-8 overflow-hidden">
          <pre>{{ `${selected.length} itens` }}</pre>
        </div>

        <div class="flex justify-end">
          <button @click="closeDeleteDialog()"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2 mr-4"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            <span class="text-full-white hidden md:block">Cancelar</span>
          </button>

          <button @click="confirmDeleteDialog()"
            class="flex items-center justify-center bg-low-white hover:bg-primary transition-colors rounded whitespace-nowrap p-2"
          >
            <span class="text-full-white md:mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>

            </span>
            <span class="text-full-white hidden md:block">Confirmar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      showNewDialog: false,
      newItemDescription: '',
      showEditDialog: false,
      editItemDescription: '',
      showDeleteDialog: false,
      showButtonsContainerDialog: false,
      showOverlay: false,
      clickedItem: null,
      selected: [],
      items: [
        { id: 1, description: 'Criar a dialog de Novo item' },
        { id: 2, description: 'Criar a função de Atualizar' }
      ],
    }
  },

  computed: {
    tableHeaders() {
      return ['ID', 'Descrição', 'actions']
    },

    tableContents() {
      return this.items 
    }
  },

  methods: {
    selectAllItems() {
      let checkboxes = document.querySelectorAll('#item-checkbox')

      if (this.selected.length === this.items.length) {
        this.selected = []

        Array.from(checkboxes).forEach(checkbox => {
          checkbox.removeAttribute("checked")
        })
      } else {
        this.selected = this.items.map(i => i.id)

        Array.from(checkboxes).forEach(checkbox => {
          checkbox.setAttribute("checked", "true")
        })
      }
    },

    selectItem(item) {
      const index = this.selected.findIndex(i => i === item.id)

      if (index > -1) {
        this.selected.splice(index, 1)
      } else {
        this.selected.push(item.id)
      }
    },

    openNewDialog() {
      this.showNewDialog = true
      this.showOverlay = true
    },

    closeNewDialog() {
      this.showNewDialog = false
      this.showOverlay = false
      this.newItemDescription = ''
    },

    confirmNewDialog() {
      this.items.push({
        id: this.items.length + 1,
        description: this.newItemDescription
      })

      this.closeNewDialog()
    },

    openEditDialog(item) {
      this.clickedItem = null

      if (!item) {
        item = this.items.find(i => i.id === this.selected[0])
      }

      this.clickedItem = item
      this.editItemDescription = this.clickedItem.description
      this.showEditDialog = true
      this.showOverlay = true
    },

    closeEditDialog() {
      this.showEditDialog = false
      this.showOverlay = false
      this.editItemDescription = ''
    },

    confirmEditDialog() {
      let found = this.items.find(i => i.id === this.clickedItem.id)
      found.description = this.editItemDescription
      this.closeEditDialog()
      this.editItemDescription = ''
    },

    openDeleteDialog(item) {
      this.clickedItem = null

      if (item) {
        this.clickedItem = item
      } else {
        if (this.selected.length === 1) {
          this.clickedItem = this.items.find(i => i.id === this.selected[0])
        }
      }

      this.showDeleteDialog = true
      this.showOverlay = true
    },

    closeDeleteDialog() {
      this.showDeleteDialog = false
      this.showOverlay = false
    },

    confirmDeleteDialog() {
      if (!this.clickedItem && this.selected.length > 1) {
        this.selected.forEach(item => {
          let index = this.items.findIndex(i => i.id === item.id)
          this.items.splice(index, 1)
        })
      } else {
        let index = this.items.findIndex(i => i.id === this.clickedItem.id)
        this.items.splice(index, 1)
      }

      this.selected = []
      this.closeDeleteDialog()
    },
  }
}
</script>
